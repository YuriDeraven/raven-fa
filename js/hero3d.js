/* ==========================================================================
   Hero 3D scene (dependency-free, Canvas 2D with a small 3D engine)
   - A faceted football (truncated icosahedron) that follows the cursor
   - A gold pitch wireframe in perspective beneath it
   - A drifting particle field with parallax
   ========================================================================== */
(function () {
  "use strict";

  var canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- palette (kept in sync with the CSS tokens) ---------- */
  var GOLD = [232, 194, 90];
  var GOLD_DEEP = [176, 130, 42];
  var PURPLE_DARK = [30, 10, 44];
  var LIGHT = [244, 238, 250];

  /* ---------- tiny vector helpers ---------- */
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
  function mul(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function len(a) { return Math.sqrt(dot(a, a)); }
  function norm(a) { var l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
  function mix(c1, c2, t) { return [c1[0] + (c2[0] - c1[0]) * t, c1[1] + (c2[1] - c1[1]) * t, c1[2] + (c2[2] - c1[2]) * t]; }
  function rgb(c, a) { return "rgba(" + (c[0] | 0) + "," + (c[1] | 0) + "," + (c[2] | 0) + "," + (a == null ? 1 : a) + ")"; }

  /* ---------- build the football: truncated icosahedron ---------- */
  var phi = (1 + Math.sqrt(5)) / 2;
  var IV = [
    [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
    [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
    [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
  ].map(norm);
  var IF = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
  ];

  function third(a, b) { return add(IV[a], mul(sub(IV[b], IV[a]), 1 / 3)); }

  var faces = []; // { pts: [[x,y,z]...], kind: "hex" | "pent", center }
  IF.forEach(function (t) {
    var a = t[0], b = t[1], c = t[2];
    faces.push({ kind: "hex", pts: [third(a, b), third(b, a), third(b, c), third(c, b), third(c, a), third(a, c)] });
  });
  IV.forEach(function (v, i) {
    var nb = [];
    IF.forEach(function (t) {
      if (t.indexOf(i) > -1) t.forEach(function (j) { if (j !== i && nb.indexOf(j) < 0) nb.push(j); });
    });
    // order the five neighbours around the axis through v
    var ref = sub(IV[nb[0]], v);
    var axis = v;
    nb.sort(function (p, q) {
      function ang(j) {
        var d = sub(IV[j], v);
        return Math.atan2(dot(axis, cross(ref, d)), dot(ref, d));
      }
      return ang(p) - ang(q);
    });
    faces.push({ kind: "pent", pts: nb.map(function (j) { return third(i, j); }) });
  });
  // project onto the sphere and subdivide into a triangle fan for a rounder look
  faces.forEach(function (f) {
    var c = [0, 0, 0];
    f.pts.forEach(function (p) { c = add(c, p); });
    c = mul(c, 1 / f.pts.length);
    f.normal = norm(c);
    f.center = f.normal;
    f.pts = f.pts.map(norm);
    // push the face slightly inward at the centre to hint at curvature
    f.pts3 = f.pts;
  });

  /* ---------- pitch lines (plane y = floor) ---------- */
  var FLOOR = 1.55;
  var pitch = [];
  (function buildPitch() {
    var W = 5.2, H = 3.4;
    function rect(x0, z0, x1, z1) { pitch.push([[x0, z0], [x1, z0], [x1, z1], [x0, z1], [x0, z0]]); }
    rect(-W, -H, W, H);
    pitch.push([[0, -H], [0, H]]);
    rect(-W, -1.5, -W + 1.5, 1.5);
    rect(W - 1.5, -1.5, W, 1.5);
    rect(-W, -0.7, -W + 0.55, 0.7);
    rect(W - 0.55, -0.7, W, 0.7);
    var circle = [];
    for (var i = 0; i <= 48; i++) circle.push([Math.cos(i / 48 * Math.PI * 2) * 0.95, Math.sin(i / 48 * Math.PI * 2) * 0.95]);
    pitch.push(circle);
  })();

  /* ---------- particles ---------- */
  var particles = [];
  for (var i = 0; i < 90; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 12, y: (Math.random() - 0.5) * 7, z: Math.random() * 6 - 3,
      s: 0.4 + Math.random() * 1.6, v: 0.002 + Math.random() * 0.006, gold: Math.random() < 0.6
    });
  }

  /* ---------- state ---------- */
  var W = 0, H = 0, dpr = 1;
  var mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  var rot = { x: -0.25, y: 0.4, spin: 0 };
  var running = true, visible = true, t0 = performance.now();
  var burst = 0; // pulse on click / tap

  function resize() {
    var r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function onMove(e) {
    var r = canvas.getBoundingClientRect();
    var p = e.touches ? e.touches[0] : e;
    mouse.tx = ((p.clientX - r.left) / r.width - 0.5) * 2;
    mouse.ty = ((p.clientY - r.top) / r.height - 0.5) * 2;
  }
  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("touchmove", onMove, { passive: true });
  window.addEventListener("deviceorientation", function (e) {
    if (e.gamma == null) return;
    mouse.tx = Math.max(-1, Math.min(1, e.gamma / 30));
    mouse.ty = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
  }, { passive: true });
  canvas.parentNode.addEventListener("pointerdown", function () { burst = 1; });
  window.addEventListener("resize", resize);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }, { threshold: 0 }).observe(canvas);
  }
  document.addEventListener("visibilitychange", function () { running = !document.hidden; });

  /* ---------- projection ---------- */
  function rotate(p, rx, ry) {
    var cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
    var x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy, y = p[1];
    var y2 = y * cx - z * sx, z2 = y * sx + z * cx;
    return [x, y2, z2];
  }

  function frame(now) {
    requestAnimationFrame(frame);
    if (!running || !visible) return;
    var t = (now - t0) / 1000;

    // ease the pointer
    mouse.x += (mouse.tx - mouse.x) * 0.06;
    mouse.y += (mouse.ty - mouse.y) * 0.06;
    burst *= 0.93;

    draw(t);
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);

    var small = W < 720;
    var cx = small ? W * 0.5 : W * 0.68;
    var cy = small ? 200 : H * 0.5;
    var scale = small ? W * 0.27 : Math.min(W, H) * 0.235;
    var focal = 5.2;

    function project(p, ox, oy) {
      var k = focal / (focal + p[2]);
      return [cx + (p[0] + (ox || 0)) * scale * k, cy + (p[1] + (oy || 0)) * scale * k, k];
    }

    // camera tilt follows the cursor
    var camX = -0.38 + mouse.y * 0.22;
    var camY = mouse.x * 0.35;

    /* --- glow behind the ball --- */
    var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 2.6);
    g.addColorStop(0, rgb(GOLD, 0.2 + burst * 0.2));
    g.addColorStop(0.5, rgb([110, 40, 150], 0.12));
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    /* --- particles --- */
    particles.forEach(function (p) {
      p.y -= p.v; if (p.y < -3.6) p.y = 3.6;
      var q = rotate([p.x, p.y, p.z], camX * 0.4, camY * 0.6);
      var pr = project(q, -mouse.x * 0.2 * (q[2] + 3), -mouse.y * 0.2 * (q[2] + 3));
      var a = 0.15 + 0.45 * (pr[2] - 0.6);
      ctx.fillStyle = p.gold ? rgb(GOLD, Math.max(0.05, a)) : rgb(LIGHT, Math.max(0.04, a * 0.6));
      ctx.beginPath(); ctx.arc(pr[0], pr[1], p.s * pr[2], 0, 6.283); ctx.fill();
    });

    /* --- pitch --- */
    ctx.lineWidth = 1.2;
    ctx.lineJoin = "round";
    pitch.forEach(function (line, idx) {
      ctx.beginPath();
      line.forEach(function (pt, i) {
        var p = rotate([pt[0], FLOOR, pt[1] + 0.2], camX, camY * 1.1);
        var s = project(p, 0, 0.0);
        if (i === 0) ctx.moveTo(s[0], s[1]); else ctx.lineTo(s[0], s[1]);
      });
      ctx.strokeStyle = rgb(GOLD, 0.35 + burst * 0.3);
      ctx.stroke();
    });

    /* --- ball shadow --- */
    var floorC = project(rotate([0, FLOOR, 0.2], camX, camY * 1.1));
    var bob = Math.sin(t * 1.6) * 0.07;
    var sh = ctx.createRadialGradient(floorC[0], floorC[1], 0, floorC[0], floorC[1], scale * 0.95);
    sh.addColorStop(0, "rgba(0,0,0,0.55)"); sh.addColorStop(1, "rgba(0,0,0,0)");
    ctx.save();
    ctx.translate(floorC[0], floorC[1]); ctx.scale(1, 0.28); ctx.translate(-floorC[0], -floorC[1]);
    ctx.fillStyle = sh; ctx.beginPath(); ctx.arc(floorC[0], floorC[1], scale * (0.95 - bob * 0.8), 0, 6.283); ctx.fill();
    ctx.restore();

    /* --- football --- */
    var spin = reduce ? 0.6 : t * 0.35 + burst * 2.0;
    var ry = rot.y + spin + mouse.x * 0.9;
    var rx = rot.x + mouse.y * 0.6;
    var light = norm([-0.5, -0.7, -0.6]);
    var R = 1.0, lift = -0.1 + bob;

    var drawList = [];
    faces.forEach(function (f) {
      var n = rotate(f.normal, rx, ry);
      if (n[2] > 0) return; // back-face (camera looks along +z; front faces point toward -z)
      var pts = f.pts3.map(function (p) {
        var r = rotate(mul(p, R), rx, ry);
        return project(r, 0, lift);
      });
      drawList.push({ f: f, n: n, pts: pts, z: n[2] });
    });
    drawList.sort(function (a, b) { return b.z - a.z; });

    // the ball itself: dark base disc so seams never show the background
    var bc = project([0, 0, 0], 0, lift);
    ctx.fillStyle = rgb(PURPLE_DARK, 1);
    ctx.beginPath(); ctx.arc(bc[0], bc[1], scale * R * 1.0, 0, 6.283); ctx.fill();

    drawList.forEach(function (d) {
      var lum = Math.max(0, dot(d.n, mul(light, -1)));
      var facing = -d.n[2];
      var col;
      if (d.f.kind === "pent") {
        col = mix([22, 8, 34], [95, 40, 130], lum * 0.9);
      } else {
        col = mix(mix(GOLD_DEEP, [120, 84, 30], 0.2), mix(GOLD, LIGHT, 0.55), Math.pow(lum, 0.8));
      }
      ctx.beginPath();
      d.pts.forEach(function (p, i) { if (i === 0) ctx.moveTo(p[0], p[1]); else ctx.lineTo(p[0], p[1]); });
      ctx.closePath();
      ctx.fillStyle = rgb(col, 1);
      ctx.fill();
      ctx.lineWidth = Math.max(1.4, scale * 0.012);
      ctx.strokeStyle = rgb(d.f.kind === "pent" ? GOLD : PURPLE_DARK, d.f.kind === "pent" ? 0.9 : 0.85);
      ctx.stroke();
      // sheen on faces turned toward the light
      if (lum > 0.65) {
        ctx.fillStyle = "rgba(255,255,255," + ((lum - 0.65) * 0.35) + ")";
        ctx.fill();
      }
    });

    // limb darkening and a specular highlight on the sphere
    var edge = ctx.createRadialGradient(bc[0] - scale * 0.3, bc[1] - scale * 0.35, scale * 0.1, bc[0], bc[1], scale * R);
    edge.addColorStop(0, "rgba(255,255,255,0.18)");
    edge.addColorStop(0.55, "rgba(0,0,0,0)");
    edge.addColorStop(1, "rgba(10,0,20,0.55)");
    ctx.fillStyle = edge;
    ctx.beginPath(); ctx.arc(bc[0], bc[1], scale * R, 0, 6.283); ctx.fill();

    // rim
    ctx.lineWidth = 2;
    ctx.strokeStyle = rgb(GOLD, 0.6 + burst * 0.4);
    ctx.beginPath(); ctx.arc(bc[0], bc[1], scale * R, 0, 6.283); ctx.stroke();

    // orbit ring
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = rgb(GOLD, 0.28);
    for (var k = 0; k < 2; k++) {
      ctx.beginPath();
      for (var i = 0; i <= 90; i++) {
        var a = i / 90 * 6.283 + t * (k ? -0.25 : 0.2);
        var p = rotate([Math.cos(a) * (1.55 + k * 0.28), Math.sin(a) * 0.0, Math.sin(a) * (1.55 + k * 0.28)], rx * 0.5 + 0.9 + k * 0.4, camY + k);
        var s = project(p, 0, lift);
        if (i === 0) ctx.moveTo(s[0], s[1]); else ctx.lineTo(s[0], s[1]);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  resize();
  if (reduce) { draw(0); } else { requestAnimationFrame(frame); }
  // draw once for the reduced-motion case on resize too
  window.addEventListener("resize", function () { if (reduce) draw(0); });
})();
