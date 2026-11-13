/* ==========================================================================
   Raven Football Academy: page behaviour
   Renders every section from window.RFA (see js/data.js) and wires up the
   interactions. No libraries, no build step, relative paths only.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.RFA;
  var root = document.documentElement;
  root.classList.add("js");

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var naira = function (n) { return "₦" + Number(n).toLocaleString("en-NG"); };

  /* ---------- dates ---------- */
  function fmtDate(iso, opts) {
    var d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-GB", opts || { day: "numeric", month: "short", year: "numeric" });
  }
  function nextSaturdays(n) {
    var out = [], d = new Date(); d.setHours(12, 0, 0, 0);
    var add = (6 - d.getDay() + 7) % 7; if (add === 0) add = 7;
    d.setDate(d.getDate() + add);
    for (var i = 0; i < n; i++) { out.push(new Date(d)); d.setDate(d.getDate() + 7); }
    return out;
  }
  function isoOf(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  var saturdays = nextSaturdays(4);

  /* ---------- small icons ---------- */
  var ICON = {
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4.1c1.7.7 2.4.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z"/></svg>',
    Instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>',
    Facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3A21 21 0 0 0 14.3 4c-2.3 0-3.8 1.4-3.8 3.9v2.5H8v3h2.5V21z"/></svg>',
    X: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg>',
    YouTube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"/></svg>'
  };

  /* ==========================================================================
     NAV
     ========================================================================== */
  var nav = $("#nav"), toggle = $("#navToggle"), links = $("#navLinks");
  function onScroll() { nav.classList.toggle("is-stuck", window.scrollY > 12); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  toggle.addEventListener("click", function () {
    var open = !links.classList.contains("is-open");
    links.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$("a", links).forEach(function (a) { a.addEventListener("click", function () { links.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }); });

  // active section highlight
  if ("IntersectionObserver" in window) {
    var map = {};
    $$("[data-link]").forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var secs = ["home", "activities", "players", "programs", "contact"].map(function (id) { return document.getElementById(id); });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        $$("[data-link]").forEach(function (a) { a.classList.remove("is-active"); });
        if (map[e.target.id]) map[e.target.id].classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(function (s) { if (s) spy.observe(s); });
  }

  /* ==========================================================================
     TICKER + STATS
     ========================================================================== */
  (function () {
    var items = D.ticker.map(function (t) { return '<span class="ticker__item">' + esc(t) + '<img src="./assets/logos/logo-deep-purple.png" alt=""></span>'; }).join("");
    $("#tickerTrack").innerHTML = items + items + items + items;
  })();

  (function () {
    var list = $("#statsList");
    list.innerHTML = D.stats.map(function (s, i) {
      return '<li data-reveal style="--d:' + (i * 0.08) + 's"><div class="stat__num" data-to="' + s.value + '" data-suffix="' + esc(s.suffix) + '">' + s.value + esc(s.suffix) + '</div><div class="stat__label">' + esc(s.label) + '</div></li>';
    }).join("");
    if (!("IntersectionObserver" in window) || reduce) return;
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target, to = +el.dataset.to, suf = el.dataset.suffix, t0 = performance.now(), dur = 1400;
        (function tick(now) {
          var p = Math.min(1, (now - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
          el.textContent = v + suf;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: 0.6 });
    $$(".stat__num", list).forEach(function (n) { io.observe(n); });
  })();

  /* ==========================================================================
     ACTIVITIES
     ========================================================================== */
  var cats = ["All", "Matchday", "Training", "Trials", "Community"];
  var feedFilter = "All";

  function resultOf(m) { return m.hs > m.as ? "W" : m.hs < m.as ? "L" : "D"; }
  function resultText(r) { return r === "W" ? "Win" : r === "L" ? "Defeat" : "Draw"; }

  function activityCard(a, i, feature) {
    var date = a.upcoming ? saturdays[0] : null;
    var dateLabel = a.upcoming
      ? date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })
      : fmtDate(a.date);
    var title = a.upcoming ? "Open trials: " + date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) : a.title;
    var score = "";
    if (a.match) {
      var r = resultOf(a.match);
      score = '<div class="score" aria-label="' + esc(a.match.home + " " + a.match.hs + " " + a.match.as + " " + a.match.away) + '">' +
        '<span class="score__team">' + esc(a.match.home) + '</span>' +
        '<span class="score__num">' + a.match.hs + ' – ' + a.match.as + '</span>' +
        '<span class="score__team">' + esc(a.match.away) + '</span>' +
        '<span class="score__res score__res--' + r + '">Full time · ' + resultText(r) + '</span></div>';
    }
    var extra = a.upcoming ? '<span class="upcoming"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>Upcoming</span>' : "";
    return '<article class="card' + (feature ? " card--feature" : "") + '" data-reveal style="--d:' + ((i % 2) * 0.08) + 's">' +
      '<div class="card__media"><span class="tag tag--' + esc(a.category) + '">' + esc(a.category) + '</span>' +
      '<img src="' + esc(a.photo) + '" alt="' + esc(a.alt) + '" loading="lazy" decoding="async"></div>' +
      '<div class="card__body"><span class="card__date">' + esc(dateLabel) + '</span>' +
      '<h3 class="card__title">' + esc(title) + '</h3>' +
      '<p class="card__text">' + esc(a.excerpt) + '</p>' + score + extra + '</div></article>';
  }

  function renderFeed() {
    var items = D.activities.filter(function (a) { return feedFilter === "All" || a.category === feedFilter; });
    var grid = $("#feedGrid");
    if (!items.length) { grid.innerHTML = '<p class="feed__empty">Nothing here yet. Check back soon.</p>'; return; }
    grid.innerHTML = items.map(function (a, i) { return activityCard(a, i, i === 0 && feedFilter === "All"); }).join("");
    // if the last card would sit alone in a row, let it span the full width
    var cards = $$(".card", grid), feat = cards[0] && cards[0].classList.contains("card--feature");
    if ((feat ? cards.length - 1 : cards.length) % 2 === 1 && cards.length > 1) cards[cards.length - 1].classList.add("card--wide");
    revealScan(grid);
  }

  (function () {
    var wrap = $("#feedChips");
    wrap.innerHTML = cats.map(function (c) {
      return '<button class="chip" role="tab" type="button" aria-selected="' + (c === feedFilter) + '" data-cat="' + c + '">' + c + '</button>';
    }).join("");
    wrap.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      feedFilter = b.dataset.cat;
      $$(".chip", wrap).forEach(function (x) { x.setAttribute("aria-selected", x === b); });
      renderFeed();
    });
  })();

  /* ---------- sidebar ---------- */
  (function () {
    var A = D.academy;
    $("#infoAddress").innerHTML = esc(D.academy.ground) + "<br>" + esc(A.city) + ", Nigeria";
    $("#infoSchedule").innerHTML = D.schedule.map(function (s) {
      return "<li><b>" + esc(s.days) + "<small>" + esc(s.group) + "</small></b><span>" + esc(s.time) + "</span></li>";
    }).join("");
    $("#infoBrackets").innerHTML = D.brackets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
    var c = A.phones.map(function (p) { return '<div class="contact-line"><a href="tel:' + esc(p.tel) + '">' + esc(p.label) + "</a></div>"; }).join("");
    if (A.email) c += '<div class="contact-line"><a href="mailto:' + esc(A.email) + '">' + esc(A.email) + "</a></div>";
    c += '<a class="wa" target="_blank" rel="noopener" href="https://wa.me/' + A.whatsapp + '">' + ICON.wa + "WhatsApp us</a>";
    $("#infoContact").innerHTML = c;
    $("#bookDate").textContent = saturdays[0].toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  })();

  /* ==========================================================================
     SQUAD
     ========================================================================== */
  var posMap = { FWD: "Forward", MID: "Midfielder", DEF: "Defender", GK: "Goalkeeper" };
  var filters = [["ALL", "All"], ["FWD", "Forwards"], ["MID", "Midfielders"], ["DEF", "Defenders"], ["GK", "Goalkeepers"]];
  var squadFilter = "ALL";

  function playerArt(p) {
    // Placeholder portrait: stylised player bust with crest watermark. Swap for real photos by adding `photo` to a player.
    var sid = "s" + p.id;
    return '<svg viewBox="0 0 300 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
      '<defs><radialGradient id="g' + sid + '" cx="50%" cy="38%" r="55%"><stop offset="0" stop-color="#e8c25a" stop-opacity=".28"/><stop offset="1" stop-color="#e8c25a" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="j' + sid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9e4f0"/><stop offset="1" stop-color="#9c93aa"/></linearGradient></defs>' +
      '<rect width="300" height="360" fill="url(#g' + sid + ')"/>' +
      '<image href="./assets/logos/logo-gold.png" x="70" y="40" width="160" height="251" opacity=".07"/>' +
      '<g stroke="rgba(232,194,90,.18)" fill="none" stroke-width="1.4"><circle cx="150" cy="365" r="120"/><path d="M0 300h300"/></g>' +
      '<path d="M40 360c4-62 36-96 110-96s106 34 110 96z" fill="url(#j' + sid + ')"/>' +
      '<path d="M112 266l38 40 38-40" fill="none" stroke="#1d0a29" stroke-width="9" stroke-linejoin="round"/>' +
      '<path d="M50 345c12-40 34-66 62-79M250 345c-12-40-34-66-62-79" stroke="#1d0a29" stroke-width="7" fill="none" opacity=".5"/>' +
      '<rect x="134" y="226" width="32" height="42" rx="14" fill="#6b4a37"/>' +
      '<ellipse cx="150" cy="190" rx="46" ry="54" fill="#7a5540"/>' +
      '<path d="M104 184c-2-34 20-54 46-54s48 20 46 54c-8-22-22-30-46-30s-38 8-46 30z" fill="#14061c"/>' +
      '<ellipse cx="132" cy="196" rx="4" ry="5" fill="#14061c" opacity=".7"/><ellipse cx="168" cy="196" rx="4" ry="5" fill="#14061c" opacity=".7"/>' +
      '</svg>';
  }

  function playerCard(p, i) {
    var stats = p.front.map(function (s) { return "<div><b>" + esc(s[1]) + "</b><span>" + esc(s[0]) + "</span></div>"; }).join("");
    return '<button type="button" class="pcard" data-id="' + p.id + '" data-hue="' + p.hue + '" style="--d:' + (i * 0.045) + 's" aria-label="' + esc(p.name + ", " + posMap[p.pos] + ", number " + p.number + ". Open profile") + '">' +
      '<div class="pcard__photo">' + playerArt(p) +
      '<span class="pcard__pos">' + p.pos + '</span>' + (p.captain ? '<span class="pcard__cap">CAPTAIN</span>' : "") +
      '<span class="pcard__num">' + p.number + '</span></div>' +
      '<div class="pcard__info"><h3 class="pcard__name">' + esc(p.name) + '</h3>' +
      '<p class="pcard__meta">Age ' + p.age + ' · ' + esc(p.role) + ' · ' + esc(p.bracket) + '</p>' +
      '<div class="pcard__stats">' + stats + '</div></div></button>';
  }

  function renderSquad() {
    var list = D.players.filter(function (p) { return squadFilter === "ALL" || p.pos === squadFilter; });
    $("#squadGrid").innerHTML = list.map(playerCard).join("");
    $$(".pcard", $("#squadGrid")).forEach(attachTilt);
  }

  (function () {
    var wrap = $("#squadChips");
    wrap.innerHTML = filters.map(function (f) {
      var n = f[0] === "ALL" ? D.players.length : D.players.filter(function (p) { return p.pos === f[0]; }).length;
      return '<button class="chip" role="tab" type="button" aria-selected="' + (f[0] === squadFilter) + '" data-f="' + f[0] + '">' + f[1] + "<small>" + n + "</small></button>";
    }).join("");
    wrap.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      squadFilter = b.dataset.f;
      $$(".chip", wrap).forEach(function (x) { x.setAttribute("aria-selected", x === b); });
      renderSquad();
    });
  })();

  function attachTilt(card) {
    if (reduce) return;
    card.addEventListener("pointermove", function (e) {
      if (e.pointerType === "touch") return;
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--ry", (x * 10).toFixed(2) + "deg");
      card.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg");
    });
    card.addEventListener("pointerleave", function () { card.style.setProperty("--ry", "0deg"); card.style.setProperty("--rx", "0deg"); });
  }

  /* ---------- player modal (expands out of the card) ---------- */
  var modal = $("#modal"), panel = $("#modalPanel"), backdrop = $("#modalBackdrop");
  var openCard = null, closing = false, lastFocus = null;

  function radar(p) {
    var keys = Object.keys(p.attrs), n = keys.length, cx = 70, cy = 62, R = 46;
    function pt(i, r) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; }
    var rings = [0.25, 0.5, 0.75, 1].map(function (k) {
      return '<polygon points="' + keys.map(function (_, i) { return pt(i, R * k).join(","); }).join(" ") + '" fill="none" stroke="rgba(244,238,250,.14)" stroke-width="1"/>';
    }).join("");
    var spokes = keys.map(function (_, i) { var q = pt(i, R); return '<line x1="' + cx + '" y1="' + cy + '" x2="' + q[0] + '" y2="' + q[1] + '" stroke="rgba(244,238,250,.1)"/>'; }).join("");
    var poly = keys.map(function (k, i) { return pt(i, R * p.attrs[k] / 100).join(","); }).join(" ");
    var dots = keys.map(function (k, i) { var q = pt(i, R * p.attrs[k] / 100); return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="2.4" fill="#e8c25a"/>'; }).join("");
    var labels = keys.map(function (k, i) {
      var q = pt(i, R + 11), anchor = Math.abs(q[0] - cx) < 4 ? "middle" : q[0] > cx ? "start" : "end";
      return '<text x="' + q[0] + '" y="' + (q[1] + 3) + '" text-anchor="' + anchor + '">' + esc(k.slice(0, 3).toUpperCase()) + "</text>";
    }).join("");
    return '<svg class="radar" viewBox="-14 -6 168 136" role="img" aria-label="Attribute radar chart">' + rings + spokes + '<polygon class="poly" points="' + poly + '"/>' + dots + labels + "</svg>";
  }

  function modalHTML(p) {
    var bars = Object.keys(p.attrs).map(function (k, i) {
      return '<div class="bar" style="--v:' + p.attrs[k] + '%;--i:' + i + '"><span>' + esc(k) + "</span><i></i><b>" + p.attrs[k] + "</b></div>";
    }).join("");
    var season = p.season.map(function (s) { return "<div><b>" + esc(s[1]) + "</b><span>" + esc(s[0]) + "</span></div>"; }).join("");
    var hl = p.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("");
    return '<button class="m-close" type="button" aria-label="Close player profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>' +
      '<div class="m-photo">' + playerArt(p) + '<span class="pcard__pos">' + p.pos + '</span><span class="pcard__num">' + p.number + '</span>' +
      '<div class="m-name"><h3 id="modalName">' + esc(p.name) + '</h3><p>' + esc(p.role) + ' · ' + esc(p.bracket) + (p.captain ? " · Captain" : "") + '</p></div></div>' +
      '<div class="m-body">' +
      '<div class="m-facts" style="--i:0"><div><span>Age</span><b>' + p.age + '</b></div><div><span>Foot</span><b>' + esc(p.foot) + '</b></div><div><span>Height</span><b>' + esc(p.height) + '</b></div><div><span>Weight</span><b>' + esc(p.weight) + '</b></div></div>' +
      '<div class="m-sec" style="--i:1"><h4>Scouting report</h4><p class="m-bio">' + esc(p.bio) + '</p></div>' +
      '<div class="m-sec" style="--i:2"><h4>Attributes</h4><div class="m-attrs">' + radar(p) + '<div class="bars">' + bars + '</div></div></div>' +
      '<div class="m-sec" style="--i:3"><h4>Season breakdown</h4><div class="m-season">' + season + '</div></div>' +
      '<div class="m-sec" style="--i:4"><h4>Highlights</h4><ul class="m-hl">' + hl + '</ul></div>' +
      '<p class="m-note" style="--i:5">Sample profile with placeholder statistics.</p></div>';
  }

  function insetFrom(cardRect, panelRect) {
    var t = Math.max(0, cardRect.top - panelRect.top), l = Math.max(0, cardRect.left - panelRect.left);
    var r = Math.max(0, panelRect.right - cardRect.right), b = Math.max(0, panelRect.bottom - cardRect.bottom);
    return "inset(" + t + "px " + r + "px " + b + "px " + l + "px round 18px)";
  }

  function openModal(card) {
    var p = D.players.filter(function (x) { return x.id === card.dataset.id; })[0]; if (!p) return;
    openCard = card; closing = false; lastFocus = card;
    panel.innerHTML = modalHTML(p);
    panel.style.setProperty("--h1", getComputedStyle(card).getPropertyValue("--h1"));
    panel.style.setProperty("--h2", getComputedStyle(card).getPropertyValue("--h2"));
    $(".m-photo", panel).setAttribute("data-hue", p.hue);
    var sw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden"; if (sw > 0) document.body.style.paddingRight = sw + "px";
    modal.hidden = false;
    panel.scrollTop = 0;
    var from = insetFrom(card.getBoundingClientRect(), panel.getBoundingClientRect());
    card.classList.add("is-hidden");
    requestAnimationFrame(function () {
      modal.classList.add("is-open");
      if (!reduce && panel.animate) {
        panel.animate([{ clipPath: from, opacity: .6 }, { clipPath: "inset(0px 0px 0px 0px round 24px)", opacity: 1 }], { duration: 620, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
      $(".m-close", panel).focus({ preventScroll: true });
    });
  }

  function closeModal() {
    if (closing || modal.hidden) return; closing = true;
    var card = openCard;
    modal.classList.remove("is-open");
    var done = function () {
      modal.hidden = true; panel.innerHTML = ""; closing = false;
      document.body.style.overflow = ""; document.body.style.paddingRight = "";
      if (card) { card.classList.remove("is-hidden"); try { card.focus({ preventScroll: true }); } catch (e) {} }
    };
    if (!reduce && panel.animate && card) {
      var to = insetFrom(card.getBoundingClientRect(), panel.getBoundingClientRect());
      var a = panel.animate([{ clipPath: "inset(0px 0px 0px 0px round 24px)", opacity: 1 }, { clipPath: to, opacity: .4 }], { duration: 420, easing: "cubic-bezier(.5,0,.2,1)", fill: "forwards" });
      a.onfinish = function () { done(); };
    } else done();
  }

  $("#squadGrid").addEventListener("click", function (e) { var c = e.target.closest(".pcard"); if (c) openModal(c); });
  backdrop.addEventListener("click", closeModal);
  panel.addEventListener("click", function (e) { if (e.target.closest(".m-close")) closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") { // keep focus inside the dialog
      var f = $$("button, a[href]", panel); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ==========================================================================
     PROGRAMS, FEES, FACILITIES
     ========================================================================== */
  $("#pathGrid").innerHTML = D.programs.map(function (p, i) {
    return '<li class="stage" data-reveal style="--d:' + (i * 0.1) + 's"><img class="stage__ghost" src="./assets/logos/logo-gold.png" alt="" aria-hidden="true">' +
      '<div class="stage__tier">' + esc(p.tier) + '</div><h3 class="stage__name">' + esc(p.name) + '</h3><p class="stage__blurb">' + esc(p.blurb) + '</p>' +
      '<ul>' + p.focus.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + '</ul>' +
      '<dl><div><dt>Sessions</dt><dd>' + esc(p.sessions) + '</dd></div><div><dt>Coaching</dt><dd>' + esc(p.ratio) + '</dd></div><div><dt>Outcome</dt><dd>' + esc(p.outcome) + '</dd></div></dl></li>';
  }).join("");

  $("#feesList").innerHTML = D.fees.map(function (f) {
    return '<li><b>' + esc(f.item) + '</b><span class="amt">' + naira(f.amount) + '</span><small>' + esc(f.note) + '</small></li>';
  }).join("");
  $("#docsList").innerHTML = D.documents.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("");
  $("#conductAcc").innerHTML = D.conduct.map(function (c, i) {
    return '<details' + (i === 0 ? " open" : "") + '><summary>' + esc(c.title) + '</summary><p>' + esc(c.text) + '</p></details>';
  }).join("");

  $("#facGrid").innerHTML = D.facilities.map(function (f, i) {
    return '<article class="fac__item" data-reveal style="--d:' + (i * 0.1) + 's"><img src="' + esc(f.photo) + '" alt="' + esc(f.alt) + '" loading="lazy" decoding="async"><div class="fac__body"><h3>' + esc(f.title) + '</h3><p>' + esc(f.text) + '</p></div></article>';
  }).join("");
  $("#methodRow").innerHTML = D.method.map(function (m) { return "<div><b>" + esc(m[0]) + "</b><p>" + esc(m[1]) + "</p></div>"; }).join("");
  $("#kitRow").innerHTML = D.kit.map(function (k, i) {
    return '<figure class="kit__item" data-reveal style="--d:' + (i * 0.1) + 's"><img src="' + esc(k.photo) + '" alt="' + esc(k.alt) + '" loading="lazy" decoding="async"><figcaption>' + esc(k.label) + "</figcaption></figure>";
  }).join("");

  /* ==========================================================================
     FOOTER
     ========================================================================== */
  (function () {
    var A = D.academy;
    $("#footLegal").textContent = A.legal + " · " + A.rc;
    $("#footAddress").innerHTML = esc(A.ground) + ",<br>" + esc(A.city) + ", Nigeria";
    $("#footPhones").innerHTML = A.phones.map(function (p) { return '<a href="tel:' + esc(p.tel) + '">' + esc(p.label) + "</a>"; }).join("<br>") + (A.email ? '<br><a href="mailto:' + esc(A.email) + '">' + esc(A.email) + "</a>" : "");
    $("#socialList").innerHTML = '<li><a href="https://wa.me/' + A.whatsapp + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICON.wa + "</a></li>" +
      A.social.filter(function (s) { return s.url; }).map(function (s) {
        return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener" aria-label="' + esc(s.name) + '">' + (ICON[s.name] || esc(s.name)) + "</a></li>";
      }).join("");
    $("#footCopy").textContent = "© " + new Date().getFullYear() + " " + A.legal + ". All rights reserved.";
  })();

  /* ==========================================================================
     TRIAL FORM
     ========================================================================== */
  var form = $("#trialForm");
  (function fillSelects() {
    $("#bracket").innerHTML = '<option value="">Select bracket</option>' + D.brackets.map(function (b) { return "<option>" + esc(b) + "</option>"; }).join("");
    $("#slot").innerHTML = '<option value="">Select a date</option>' + saturdays.map(function (d) {
      var s = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
      return '<option value="' + isoOf(d) + '">' + s + " · 8:30 AM</option>";
    }).join("");
  })();

  function bracketForAge(a) { return a <= 8 ? D.brackets[0] : a <= 10 ? D.brackets[1] : a <= 13 ? D.brackets[2] : a <= 16 ? D.brackets[3] : ""; }
  var autoBracket = true;

  var rules = {
    playerName: function (v) { return v.trim().split(/\s+/).filter(Boolean).length < 2 ? "Enter the player's first and last name." : ""; },
    age: function (v) {
      if (!v) return "Enter the player's age.";
      var n = +v; if (!(n >= 4)) return "Players must be at least 4 years old.";
      if (n > 16) return "We take players up to U-16. Please check the age.";
      return "";
    },
    bracket: function (v) {
      if (!v) return "Choose an age bracket.";
      var a = +form.age.value; if (a >= 4 && a <= 16) { var exp = bracketForAge(a); if (exp && exp !== v) return "At age " + a + " the usual bracket is " + exp + "."; }
      return "";
    },
    gender: function (v) { return v ? "" : "Select gender."; },
    foot: function (v) { return v ? "" : "Select the preferred foot."; },
    position: function () { return form.position.value ? "" : "Pick a preferred position."; },
    guardian: function (v) { return v.trim().split(/\s+/).filter(Boolean).length < 2 ? "Enter the parent or guardian's full name." : ""; },
    phone: function (v) {
      var d = v.replace(/[\s\-().]/g, "");
      if (!d) return "Enter a phone or WhatsApp number.";
      return /^(\+?234|0)[789][01]\d{8}$/.test(d) ? "" : "Use a Nigerian number like 0816 465 5997 or +234 816 465 5997.";
    },
    email: function (v) { return !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "That email address does not look right."; },
    slot: function (v) { return v ? "" : "Choose a trial date."; }
  };

  function fieldWrap(name) { var el = form.elements[name]; if (!el) return null; var n = el.length && !el.tagName ? el[0] : el; return n.closest(".field"); }
  function setErr(name, msg) {
    var w = fieldWrap(name), e = $('[data-err="' + name + '"]', form); if (!w || !e) return;
    w.classList.toggle("is-bad", !!msg); w.classList.toggle("is-ok", !msg && touched[name]);
    e.textContent = msg; e.classList.toggle("show", !!msg);
    var ctl = form.elements[name]; var first = ctl.length && !ctl.tagName ? ctl[0] : ctl;
    if (first && first.setAttribute) { if (msg) first.setAttribute("aria-invalid", "true"); else first.removeAttribute("aria-invalid"); }
  }
  var touched = {};
  function check(name) {
    var ctl = form.elements[name]; var val = name === "position" ? "" : ctl.value;
    var msg = rules[name](val); setErr(name, msg); return !msg;
  }
  Object.keys(rules).forEach(function (name) {
    var ctl = form.elements[name]; var els = ctl.length && !ctl.tagName ? Array.prototype.slice.call(ctl) : [ctl];
    els.forEach(function (el) {
      el.addEventListener("blur", function () { touched[name] = true; check(name); });
      el.addEventListener("input", function () { if (touched[name]) check(name); });
      el.addEventListener("change", function () { touched[name] = true; check(name); });
    });
  });
  form.age.addEventListener("input", function () {
    var a = +form.age.value, b = bracketForAge(a);
    if (b && (autoBracket || !form.bracket.value)) { form.bracket.value = b; autoBracket = true; if (touched.bracket) check("bracket"); }
  });
  form.bracket.addEventListener("change", function () { autoBracket = false; if (touched.age) check("age"); });

  var slotOpts = {}; // for the summary

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var bad = null;
    Object.keys(rules).forEach(function (n) { touched[n] = true; if (!check(n) && !bad) bad = n; });
    if (bad) {
      var ctl = form.elements[bad]; var f = ctl.length && !ctl.tagName ? ctl[0] : ctl; f.focus();
      return;
    }
    var btn = $("#submitBtn"); btn.disabled = true; btn.textContent = "Booking…";
    setTimeout(function () { showDone(); btn.disabled = false; btn.textContent = "Book my trial"; }, 900);
  });

  function showDone() {
    var v = function (n) { return form.elements[n].value.trim(); };
    var slotLabel = form.slot.options[form.slot.selectedIndex].text;
    var ref = "RFA-" + Date.now().toString(36).toUpperCase().slice(-6);
    var rows = [
      ["Player", v("playerName") + " (" + v("age") + ", " + v("gender") + ")"],
      ["Bracket", v("bracket")],
      ["Position", form.position.value + " · " + v("foot") + " foot"],
      ["Guardian", v("guardian")],
      ["Phone", v("phone")],
      ["Trial date", slotLabel]
    ];
    if (v("club")) rows.splice(3, 0, ["Previous club", v("club")]);
    if (v("email")) rows.splice(rows.length - 1, 0, ["Email", v("email")]);
    $("#doneRef").textContent = ref;
    $("#doneSum").innerHTML = rows.map(function (r) { return "<div><dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("");
    $("#doneTitle").textContent = "Thanks, " + v("guardian").split(/\s+/)[0] + ". Trial request ready.";
    var msg = "Hello Raven Football Academy. I would like to book a trial.\n\nReference: " + ref + "\n" + rows.map(function (r) { return r[0] + ": " + r[1]; }).join("\n");
    $("#waBtn").href = "https://wa.me/" + D.academy.whatsapp + "?text=" + encodeURIComponent(msg);
    form.hidden = true; var d = $("#done"); d.hidden = false;
    d.focus({ preventScroll: true });
    $("#formCard").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  }

  $("#againBtn").addEventListener("click", function () {
    form.reset(); touched = {}; autoBracket = true;
    $$(".field", form).forEach(function (f) { f.classList.remove("is-bad", "is-ok"); });
    $$(".err", form).forEach(function (e) { e.textContent = ""; e.classList.remove("show"); });
    $$("[aria-invalid]", form).forEach(function (e) { e.removeAttribute("aria-invalid"); });
    $("#done").hidden = true; form.hidden = false; form.playerName.focus();
  });

  /* ==========================================================================
     REVEAL ON SCROLL
     Everything is visible by default. Items that start below the fold are
     given a hidden state only after they are measured, then revealed on entry.
     ========================================================================== */
  var revealIO = null;
  function revealScan(scope) {
    if (reduce || !("IntersectionObserver" in window)) return;
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    }
    $$("[data-reveal]:not(.pre)", scope || document).forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.92) { el.classList.add("pre"); revealIO.observe(el); }
    });
    $$(".section__head, .costs > div, .method, .kit__copy, .contact__intro, .formcard", scope || document).forEach(function (el) {
      if (el.classList.contains("pre")) return;
      var r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.92) { el.classList.add("pre"); revealIO.observe(el); }
    });
  }

  // magnetic buttons
  if (!reduce && window.matchMedia("(hover: hover)").matches) {
    $$(".btn--lg").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) * 0.12).toFixed(1) + "px," + ((e.clientY - r.top - r.height / 2) * 0.2).toFixed(1) + "px)";
      });
      b.addEventListener("pointerleave", function () { b.style.transform = ""; });
    });
  }

  renderFeed();
  renderSquad();
  revealScan();
})();
