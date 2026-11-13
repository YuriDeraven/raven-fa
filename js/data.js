/* ==========================================================================
   Raven Football Academy: site data
   --------------------------------------------------------------------------
   Everything the site shows lives here, so no backend or database is needed.
   Edit this file to update the site.

   Items marked  // PLACEHOLDER  are sample content and should be replaced
   with real information before the site goes public.
   Items marked  // FROM PDF     come from the official Player Intake Form.

   All asset paths are RELATIVE ("./assets/...") so the site works from a
   GitHub Pages sub-folder such as  https://yurideraven.github.io/raven-fa/
   ========================================================================== */

window.RFA = {

  /* ---------- Academy identity & contact ---------- */
  academy: {
    name: "Raven Football Academy",              // FROM PDF
    short: "Raven FA",
    legal: "Raven Football Academy Ltd",         // FROM PDF
    rc: "RC 8198240",                            // FROM PDF
    tagline: "Youth Elite Football Development", // FROM PDF
    est: 2019,                                   // from the crest ("ESTD 2019")
    ground: "Senior Secondary School, Apo Resettlement",   // FROM PDF
    city: "Abuja",                                         // FROM PDF
    phones: [                                    // FROM PDF
      { label: "+234 816 465 5997", tel: "+2348164655997" },
      { label: "0701 169 4529",     tel: "+2347011694529" }
    ],
    whatsapp: "2348164655997",                   // FROM PDF (first number)
    email: "",                                   // PLACEHOLDER: add an admissions email and it appears automatically
    social: [                                    // PLACEHOLDER: replace with the academy's real profile links
      { name: "Instagram", url: "https://www.instagram.com/" },
      { name: "Facebook",  url: "https://www.facebook.com/" },
      { name: "X",         url: "https://x.com/" },
      { name: "YouTube",   url: "https://www.youtube.com/" }
    ]
  },

  /* ---------- Training schedule ---------- */
  // PLACEHOLDER: the intake form does not list training days or hours.
  schedule: [
    { days: "Tuesday & Thursday", time: "4:00 PM – 6:00 PM",  group: "U-10 and U-13" },
    { days: "Wednesday",          time: "4:00 PM – 5:30 PM",  group: "U-5s – 8s" },
    { days: "Saturday",           time: "8:30 AM – 11:30 AM", group: "U-13 and U-16, fixtures" }
  ],

  /* ---------- Age brackets  // FROM PDF ---------- */
  brackets: ["U-5s – 8s", "U-10", "U-13", "U-16"],

  /* ---------- Fees  // FROM PDF ---------- */
  fees: [
    { item: "Registration form fee", amount: 5000,  note: "One-time, non-refundable intake and processing fee, paid on submission." },
    { item: "Monthly training fee",  amount: 15000, note: "Per child, per month. Due within the first week of every month." },
    { item: "Official academy kit",  amount: 15000, note: "Mandatory jersey for training and matchday. Price may change with vendor rates." }
  ],

  /* ---------- Registration documents  // FROM PDF ---------- */
  documents: [
    "Copy of birth certificate or age declaration",
    "Two (2) recent passport photographs",
    "Completed and signed intake form",
    "Proof of registration and initial fee payment"
  ],

  /* ---------- Code of conduct  // FROM PDF ---------- */
  conduct: [
    { title: "Punctuality & attendance", text: "Arrive at the pitch at least 15 minutes before training. Tell the coaching staff in advance about absences for illness or school." },
    { title: "Kit & equipment",          text: "Official Raven jersey, proper football boots and shin guards for every session and fixture." },
    { title: "Discipline & sportsmanship", text: "Respect for coaches, teammates, match officials and opponents is mandatory. Bullying or persistent indiscipline can lead to suspension or dismissal." },
    { title: "Timely fees",              text: "Monthly dues are settled in the first week of each month to keep playing in sessions and fixtures." }
  ],

  /* ---------- Hero ticker ---------- */
  ticker: [
    "Youth Elite Football Development",
    "Est. 2019",
    "Apo Resettlement, Abuja",
    "U-5s – 8s · U-10 · U-13 · U-16",
    "Trials open"
  ],

  /* ---------- Headline numbers (PLACEHOLDER) ---------- */
  stats: [
    { value: 5,   suffix: "",  label: "Years building talent" },
    { value: 4,   suffix: "",  label: "Age brackets" },
    { value: 120, suffix: "+", label: "Players in the pathway" },
    { value: 3,   suffix: "",  label: "Training days a week" }
  ],

  /* ---------- Activities & news  // PLACEHOLDER ---------- */
  // category: Matchday | Training | Trials | Community
  // For matches, `match` holds the scoreline.
  activities: [
    {
      id: "a1", category: "Matchday", date: "2026-11-08",
      title: "U-13 edge a lively derby 3–1",
      excerpt: "Quick passing on the left and two second-half goals from the bench settled a physical afternoon at the Apo pitch.",
      photo: "./assets/photos/p-tackle-close.jpg", alt: "Raven and opposition players contest the ball near the touchline",
      match: { home: "Raven FA U-13", away: "Wuse Rangers", hs: 3, as: 1 }, featured: true
    },
    {
      id: "a2", category: "Trials", date: "2026-11-21",
      title: "Open trials: Saturday 21 November",
      excerpt: "Boys and girls from U-5s – 8s up to U-16 are welcome. Arrive 15 minutes early with boots, shin guards and a bottle of water.",
      photo: "./assets/photos/p-team.jpg", alt: "A Raven Football Academy team lined up for a group photo",
      upcoming: true
    },
    {
      id: "a3", category: "Training", date: "2026-11-05",
      title: "Small-sided games and tight spaces",
      excerpt: "Four-a-side rotations built around first touch, scanning the field and finding the next pass before the ball arrives.",
      photo: "./assets/photos/p-flick.jpg", alt: "A Raven player controls the ball in a small-sided game"
    },
    {
      id: "a4", category: "Matchday", date: "2026-11-01",
      title: "U-10 hold Maitama Eagles to a 1–1 draw",
      excerpt: "A fine goalkeeping display kept the score level after the visitors came out quickly in the first ten minutes.",
      photo: "./assets/photos/p-keeper.jpg", alt: "A goalkeeper and attacker challenge for the ball",
      match: { home: "Raven FA U-10", away: "Maitama Eagles", hs: 1, as: 1 }
    },
    {
      id: "a5", category: "Training", date: "2026-10-29",
      title: "Pressing together: win it back in five seconds",
      excerpt: "The U-16 group worked on triggers for a coordinated press and what to do in the first moments after the ball is won.",
      photo: "./assets/photos/p-duel.jpg", alt: "Players challenge for possession during a training match"
    },
    {
      id: "a6", category: "Matchday", date: "2026-10-25",
      title: "U-16 lose narrowly 2–3 to Garki Juniors",
      excerpt: "Two goals in the last quarter-hour were not quite enough. The coaches took plenty of positives from the comeback.",
      photo: "./assets/photos/p-tackle.jpg", alt: "A Raven defender slides in to win the ball",
      match: { home: "Raven FA U-16", away: "Garki Juniors", hs: 2, as: 3 }
    },
    {
      id: "a7", category: "Community", date: "2026-10-18",
      title: "Raven Family Day on the grass",
      excerpt: "Coaches, parents, older players and friends of the academy came together for a relaxed afternoon of football and photos.",
      photo: "./assets/photos/p-family.jpg", alt: "A large group of players, coaches and friends of the academy on the pitch"
    },
    {
      id: "a8", category: "Training", date: "2026-10-15",
      title: "Saturday session: crowds on the touchline",
      excerpt: "Parents and neighbours lined the fence for an energetic morning of rotations, finishing drills and a closing scrimmage.",
      photo: "./assets/photos/p-crowd.jpg", alt: "Players chase the ball while spectators watch behind the fence"
    }
  ],

  /* ---------- Squad  // PLACEHOLDER (fictional players) ---------- */
  // pos: FWD | MID | DEF | GK
  // attrs: 0–99 scale, used for the radar chart and stat bars
  // season: shown as the full season breakdown in the profile
  players: [
    {
      id: "p1", name: "Chidi Okafor", age: 15, pos: "FWD", role: "Striker", number: 9, bracket: "U-16",
      foot: "Right", height: "1.72 m", weight: "58 kg",
      front: [["Pace", 88], ["Goals", 21], ["Apps", 24]],
      attrs: { Pace: 88, Shooting: 84, Passing: 70, Dribbling: 80, Defending: 38, Physical: 72 },
      season: [["Appearances", 24], ["Goals", 21], ["Assists", 7], ["Minutes", "1,890"], ["Shots on target", "63%"], ["Player of the match", 5]],
      bio: "A clinical number nine who attacks the space behind defenders and rarely wastes a chance. Chidi has added strength this year and now holds the ball up for others as well as running in behind.",
      highlights: ["Clinical finisher", "Runs in behind", "Left-footed volleys"], hue: 0
    },
    {
      id: "p2", name: "Emeka Nwosu", age: 14, pos: "FWD", role: "Inside forward", number: 11, bracket: "U-16",
      foot: "Left", height: "1.66 m", weight: "52 kg",
      front: [["Pace", 91], ["Goals", 14], ["Apps", 22]],
      attrs: { Pace: 91, Shooting: 78, Passing: 72, Dribbling: 86, Defending: 34, Physical: 60 },
      season: [["Appearances", 22], ["Goals", 14], ["Assists", 12], ["Minutes", "1,712"], ["Successful dribbles", "71%"], ["Player of the match", 4]],
      bio: "The fastest player in the squad, with a low centre of gravity and a left foot that curls shots into the far corner. Emeka cuts in from the right and is learning when to release the ball early.",
      highlights: ["Explosive first step", "Cuts in on his left", "Fearless 1v1"], hue: 1
    },
    {
      id: "p3", name: "Tobi Adeyemi", age: 12, pos: "FWD", role: "Winger", number: 7, bracket: "U-13",
      foot: "Right", height: "1.53 m", weight: "41 kg",
      front: [["Pace", 85], ["Goals", 11], ["Apps", 20]],
      attrs: { Pace: 85, Shooting: 66, Passing: 68, Dribbling: 83, Defending: 30, Physical: 50 },
      season: [["Appearances", 20], ["Goals", 11], ["Assists", 9], ["Minutes", "1,380"], ["Successful dribbles", "68%"], ["Player of the match", 3]],
      bio: "A direct winger who loves to take defenders on and deliver at pace. Tobi has been working on his weaker foot and on tracking back when the team loses the ball.",
      highlights: ["Takes defenders on", "Quick delivery", "High work rate"], hue: 2
    },
    {
      id: "p4", name: "Ifeanyi Obi", age: 15, pos: "MID", role: "Playmaker", number: 10, bracket: "U-16",
      foot: "Right", height: "1.70 m", weight: "57 kg",
      front: [["Passing", 89], ["Assists", 15], ["Apps", 25]],
      attrs: { Pace: 70, Shooting: 74, Passing: 89, Dribbling: 82, Defending: 52, Physical: 62 },
      season: [["Appearances", 25], ["Goals", 8], ["Assists", 15], ["Minutes", "2,010"], ["Pass accuracy", "87%"], ["Player of the match", 6]],
      bio: "The team's metronome. Ifeanyi sees passes before they exist, sets the tempo and takes responsibility from the first whistle. Captain of the U-16 side.",
      highlights: ["Vision and range", "Sets the tempo", "Captain"], hue: 0, captain: true
    },
    {
      id: "p5", name: "Samuel Eze", age: 13, pos: "MID", role: "Box-to-box", number: 8, bracket: "U-13",
      foot: "Both", height: "1.58 m", weight: "46 kg",
      front: [["Stamina", 90], ["Goals", 9], ["Apps", 23]],
      attrs: { Pace: 76, Shooting: 70, Passing: 78, Dribbling: 72, Defending: 68, Physical: 80 },
      season: [["Appearances", 23], ["Goals", 9], ["Assists", 8], ["Minutes", "1,760"], ["Tackles won", "74%"], ["Player of the match", 3]],
      bio: "An engine in midfield who covers every blade of grass. Samuel is comfortable with either foot and arrives late in the box for tap-ins and long shots.",
      highlights: ["Two-footed", "Late runs into the box", "Wins second balls"], hue: 1
    },
    {
      id: "p6", name: "Daniel Musa", age: 11, pos: "MID", role: "Central midfielder", number: 6, bracket: "U-13",
      foot: "Right", height: "1.47 m", weight: "37 kg",
      front: [["Passing", 80], ["Assists", 7], ["Apps", 18]],
      attrs: { Pace: 68, Shooting: 58, Passing: 80, Dribbling: 70, Defending: 64, Physical: 55 },
      season: [["Appearances", 18], ["Goals", 3], ["Assists", 7], ["Minutes", "1,170"], ["Pass accuracy", "84%"], ["Player of the match", 2]],
      bio: "Calm on the ball well beyond his years. Daniel plays short, safe passes under pressure and is starting to try more forward ones.",
      highlights: ["Composed under pressure", "Short passing", "Quick learner"], hue: 2
    },
    {
      id: "p7", name: "Kelechi Ibe", age: 10, pos: "MID", role: "Attacking midfielder", number: 14, bracket: "U-10",
      foot: "Left", height: "1.38 m", weight: "31 kg",
      front: [["Dribbling", 84], ["Goals", 12], ["Apps", 16]],
      attrs: { Pace: 74, Shooting: 68, Passing: 70, Dribbling: 84, Defending: 40, Physical: 44 },
      season: [["Appearances", 16], ["Goals", 12], ["Assists", 6], ["Minutes", "890"], ["Successful dribbles", "74%"], ["Player of the match", 4]],
      bio: "A natural dribbler who plays with a smile. Kelechi tries tricks others would not dare and keeps getting better at knowing when to pass.",
      highlights: ["Tight close control", "Creative tricks", "Plays with joy"], hue: 0
    },
    {
      id: "p8", name: "Abubakar Sani", age: 15, pos: "DEF", role: "Centre-back", number: 5, bracket: "U-16",
      foot: "Right", height: "1.78 m", weight: "65 kg",
      front: [["Tackles", 91], ["Clean sheets", 9], ["Apps", 25]],
      attrs: { Pace: 66, Shooting: 40, Passing: 62, Dribbling: 48, Defending: 90, Physical: 86 },
      season: [["Appearances", 25], ["Clean sheets", 9], ["Goals", 3], ["Minutes", "2,100"], ["Aerial duels won", "78%"], ["Player of the match", 3]],
      bio: "A commanding centre-back who wins nearly everything in the air and organises the line behind him. Abubakar reads danger early and rarely needs to dive in.",
      highlights: ["Dominant in the air", "Organises the line", "Reads the game"], hue: 1
    },
    {
      id: "p9", name: "Joseph Danjuma", age: 13, pos: "DEF", role: "Right-back", number: 2, bracket: "U-13",
      foot: "Right", height: "1.56 m", weight: "44 kg",
      front: [["Pace", 82], ["Assists", 6], ["Apps", 21]],
      attrs: { Pace: 82, Shooting: 48, Passing: 70, Dribbling: 66, Defending: 76, Physical: 68 },
      season: [["Appearances", 21], ["Clean sheets", 6], ["Assists", 6], ["Minutes", "1,610"], ["Tackles won", "72%"], ["Player of the match", 2]],
      bio: "An attacking full-back with the legs to get up and down the touchline all game. Joseph delivers a dangerous early cross and is sharp in recovery.",
      highlights: ["Overlapping runs", "Recovery pace", "Early crosses"], hue: 2
    },
    {
      id: "p10", name: "David Bello", age: 12, pos: "DEF", role: "Left-back", number: 3, bracket: "U-13",
      foot: "Left", height: "1.52 m", weight: "42 kg",
      front: [["Tackles", 78], ["Clean sheets", 5], ["Apps", 19]],
      attrs: { Pace: 72, Shooting: 42, Passing: 66, Dribbling: 60, Defending: 78, Physical: 66 },
      season: [["Appearances", 19], ["Clean sheets", 5], ["Assists", 3], ["Minutes", "1,430"], ["Tackles won", "76%"], ["Player of the match", 1]],
      bio: "A tidy, reliable left-back who is hard to beat one on one. David is at his best when he can step in front of his man and start the next attack.",
      highlights: ["Hard to beat", "Left-footed passing", "Good anticipation"], hue: 0
    },
    {
      id: "p11", name: "Victor Chukwu", age: 14, pos: "GK", role: "Goalkeeper", number: 1, bracket: "U-16",
      foot: "Right", height: "1.74 m", weight: "60 kg",
      front: [["Reflexes", 88], ["Clean sheets", 10], ["Apps", 24]],
      attrs: { Reflexes: 88, Handling: 82, Distribution: 70, Positioning: 80, Aerial: 78, Communication: 84 },
      season: [["Appearances", 24], ["Clean sheets", 10], ["Saves", 96], ["Minutes", "2,160"], ["Save percentage", "79%"], ["Penalties saved", 2]],
      bio: "A vocal, confident shot-stopper with quick hands. Victor commands his area and has worked hard on starting attacks with accurate throws and short passes.",
      highlights: ["Quick reflexes", "Commands the box", "Penalty saver"], hue: 1
    },
    {
      id: "p12", name: "Emmanuel Yakubu", age: 11, pos: "GK", role: "Goalkeeper", number: 13, bracket: "U-13",
      foot: "Left", height: "1.50 m", weight: "39 kg",
      front: [["Reflexes", 79], ["Clean sheets", 6], ["Apps", 17]],
      attrs: { Reflexes: 79, Handling: 74, Distribution: 66, Positioning: 72, Aerial: 68, Communication: 76 },
      season: [["Appearances", 17], ["Clean sheets", 6], ["Saves", 71], ["Minutes", "1,190"], ["Save percentage", "75%"], ["Penalties saved", 1]],
      bio: "A brave young keeper who is not afraid to throw himself at feet. Emmanuel is learning to read crosses earlier and to play out from the back.",
      highlights: ["Brave at feet", "Quick off his line", "Left-footed distribution"], hue: 2
    }
  ],

  /* ---------- Training programmes ---------- */
  // Age brackets are FROM PDF. Descriptions are PLACEHOLDER.
  programs: [
    {
      id: "foundation", tier: "U-5s – 8s", name: "Foundation",
      blurb: "Football through play. Young players build balance, coordination and a love for the ball.",
      focus: ["Ball mastery games", "Running, jumping and balance", "Small-sided play"],
      sessions: "1 session a week", ratio: "Small groups, close coaching", outcome: "Confidence on the ball"
    },
    {
      id: "skills", tier: "U-10", name: "Skills",
      blurb: "Technique takes over. Passing, receiving and dribbling are repeated until they feel natural.",
      focus: ["First touch and passing patterns", "1v1 dribbling", "Introduction to positions"],
      sessions: "2 sessions a week", ratio: "Position-based groups", outcome: "Reliable technique under light pressure"
    },
    {
      id: "development", tier: "U-13", name: "Development",
      blurb: "Understanding the game: shape, movement and decisions, with weekly fixtures to test it.",
      focus: ["Team shape and roles", "Pressing and transitions", "Fitness and injury prevention"],
      sessions: "2 sessions + fixture", ratio: "Squad-based coaching", outcome: "Match intelligence and consistency"
    },
    {
      id: "elite", tier: "U-16", name: "Elite Showcase",
      blurb: "The top of the pathway. Match-ready players are prepared for scouting and higher levels of football.",
      focus: ["Tactical preparation", "Strength and conditioning", "Video review and scouting profile"],
      sessions: "3 sessions + fixture", ratio: "Individual development plans", outcome: "Ready for the next level"
    }
  ],

  /* ---------- Facilities & coaching (PLACEHOLDER copy) ---------- */
  facilities: [
    {
      title: "The pitch at Apo",
      text: "A fenced grass pitch at Senior Secondary School, Apo Resettlement, with full-size goals and room for small-sided games across age groups.",
      photo: "./assets/photos/p-wide.jpg", alt: "The Raven training pitch with goal and players"
    },
    {
      title: "Conditioning",
      text: "Age-appropriate speed, agility and strength work builds robust players and keeps injuries down. Warm-ups start every session.",
      photo: "./assets/photos/p-flick.jpg", alt: "A player controlling the ball at pace"
    },
    {
      title: "Coaching method",
      text: "Certified coaches follow one method across all age groups: learn the skill, apply it under pressure, then test it in a match.",
      photo: "./assets/photos/p-team.jpg", alt: "A squad gathered for a team photo"
    }
  ],
  method: [
    ["Learn", "Clear demonstrations and short, focused drills."],
    ["Pressure", "The same skill repeated against opponents and time."],
    ["Play", "Matches show what has stuck and what needs more work."],
    ["Review", "Coaches give each player two things to keep and one to fix."]
  ],

  /* ---------- Kit  // PLACEHOLDER concept renders ---------- */
  kit: [
    { photo: "./assets/photos/kit-black-set.jpg", alt: "Black matchday kit with the Raven crest", label: "Matchday set" },
    { photo: "./assets/photos/kit-navy.jpg",      alt: "Navy quarter-zip training top with the Raven crest", label: "Training top" },
    { photo: "./assets/photos/kit-black-close.jpg", alt: "Close-up of the Raven crest on a black jersey", label: "The crest" }
  ]
};
