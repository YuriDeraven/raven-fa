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
  // Confirmed by the academy: two training days a week, Saturday and Sunday.
  schedule: [
    { days: "Saturday & Sunday", time: "2:00 PM", group: "U-16" },
    { days: "Saturday & Sunday", time: "4:00 PM", group: "U-10 to U-14" },
    { days: "Saturday & Sunday", time: "5:00 PM", group: "U-5s – 8s" }
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
    { value: 2,   suffix: "",  label: "Training days a week" }
  ],

  /* ---------- Activities & news  // PLACEHOLDER ---------- */
  // category: Matchday | Training | Trials | Community
  // For matches, `match` holds the scoreline.
  activities: [
    {
      id: "a1", category: "Matchday", date: "2026-11-08", featured: true,
      title: "U-13 beat Elite Boys 5–0",
      excerpt: "Akachukwu scored a hat-trick as the U-13s ran out 5–0 winners over Elite Boys.",
      photo: "p-tackle-close", alt: "Raven and opposition players contest the ball near the touchline",
      gallery: ["p-tackle-close", "p-tackle", "n-match-grass", "n-match-wide"],
      match: { home: "Elite Boys", away: "Raven FA U-13", hs: 0, as: 5, ravenAway: true }
    },
    {
      id: "a2", category: "Trials", date: "2026-11-21", upcoming: true,
      title: "Open trials",
      excerpt: "Boys and girls from U-5s – 8s up to U-16 are welcome. Arrive 15 minutes early with boots, shin guards and a bottle of water.",
      photo: "p-team", alt: "A Raven Football Academy team lined up for a group photo",
      gallery: ["p-team", "n-squad-coach"]
    },
    {
      id: "a3", category: "Training", date: "2026-11-07",
      title: "U-5s – 8s play day",
      excerpt: "The youngest Ravens spent the morning on cones, dribbling games and plenty of shots on goal, all built around having fun with the ball.",
      photo: "n-little-play", alt: "Young children playing a small-sided game on the grass pitch",
      gallery: ["n-little-play", "n-little-lineup", "n-little-cones", "n-little-goal"]
    },
    {
      id: "a4", category: "Training", date: "2026-11-05",
      title: "Drills, cones and first touch",
      excerpt: "Four-a-side rotations, resistance-band work and solo ball mastery. Players practised receiving, scanning the field and finding the next pass before the ball arrives.",
      photo: "n-band-drill", alt: "Two Raven players work through a resistance-band drill",
      gallery: ["n-band-drill", "n-train-bw-2", "n-train-bw-1", "n-solo-dusk", "n-dribble-red", "n-dusk-pair", "n-drill-bw-3", "n-drill-bw-2", "n-drill-bw-1"]
    },
    {
      id: "a5", category: "Matchday", date: "2026-11-01",
      title: "U-8s hold Elite Boys to a 0–0 draw",
      excerpt: "A goalless draw against Elite Boys for the Raven U-8s.",
      photo: "p-keeper", alt: "A goalkeeper and attacker challenge for the ball",
      gallery: ["p-keeper", "p-crowd", "n-vs-lineup", "p-wide"],
      match: { home: "Elite Boys", away: "Raven FA U-8", hs: 0, as: 0, ravenAway: true }
    },
    {
      id: "a6", category: "Matchday", date: "2026-10-31",
      title: "Tournament day: medals for the squad",
      excerpt: "Raven players lined up beside the other teams at a one-day tournament and finished the day with medals around their necks.",
      photo: "n-medals", alt: "Raven players with medals beside their coaches",
      gallery: ["n-medals", "n-tournament"]
    },
    {
      id: "a7", category: "Community", date: "2026-10-28",
      title: "Player of the match awards",
      excerpt: "Certificates were presented to standout Ravens by coaches and officials at the end of the matches.",
      photo: "n-awards-officials", alt: "Officials presenting a certificate to a Raven player",
      gallery: ["n-awards-officials", "n-motm-1", "n-motm-2", "n-awards-group"]
    },
    {
      id: "a8", category: "Matchday", date: "2026-10-25",
      title: "U-10s beaten 3–1 by Elite Boys",
      excerpt: "A tough afternoon for the Raven U-10s, who lost 3–1 to Elite Boys.",
      photo: "p-flick", alt: "A Raven player flicks the ball past an Elite Boys defender",
      gallery: ["p-flick", "p-duel", "n-keeper-ball"],
      match: { home: "Elite Boys", away: "Raven FA U-10", hs: 3, as: 1, ravenAway: true }
    },
    {
      id: "a9", category: "Matchday", date: "2026-10-22",
      title: "Raven FA hold Triumphant to a 1–1 draw",
      excerpt: "The coaches gathered the squad on the pitch for a final talk before kick-off. The game finished level at 1–1.",
      photo: "n-coach-talk", alt: "A coach speaks to a line of Raven players on the pitch",
      gallery: ["n-coach-talk", "n-lineup-1", "n-lineup-2", "n-coach-solo"],
      match: { home: "Triumphant", away: "Raven FA", hs: 1, as: 1, ravenAway: true }
    },
    {
      id: "a10", category: "Community", date: "2026-10-18",
      title: "Raven Family Day on the grass",
      excerpt: "Coaches, parents, older players and friends of the academy came together for a relaxed afternoon of football and photos.",
      photo: "p-family", alt: "A large group of players, coaches and friends of the academy on the pitch",
      gallery: ["p-family", "n-family-dusk", "n-stands", "n-squad-parents", "n-blue-3", "n-blue-1"]
    },
    {
      id: "a11", category: "Community", date: "2026-10-11",
      title: "Squad portraits",
      excerpt: "Team photos from the season so far, on dirt, grass and turf. Every Raven in the shirt, every crest on show.",
      photo: "n-squad-grid", alt: "A Raven squad posing in two rows",
      gallery: ["n-squad-grid", "n-squad-line", "n-squad-crouch", "n-squad-grass", "n-squad-turf"]
    }
  ],

  /* ---------- Sample squad (fictional, not shown) ---------- */
  // pos: FWD | MID | DEF | GK
  // attrs: 0–99 scale, used for the radar chart and stat bars
  // season: shown as the full season breakdown in the profile
  /* ---------- Squad: real players, first batch ---------- */
  // pos: FWD | MID | DEF | GK   (used by the filter)
  // positions: the specific roles the player plays, shown on the card
  // photo: file name in assets/players/ (transparent cut-out, see README)
  // Optional per player, shown in the profile when present:
  //   number, foot, height, weight, bio, attrs{}, season[[label,value]], highlights[]
  // NOTE: number, foot, height, weight, stats, bio and highlights below are PLACEHOLDERS for the real players.
  // Replace them with real details in this file; `placeholderStats: true` shows a "to be confirmed" note in the profile.
  players: [
    {
      id: "david-madu", name: "David Madu", age: 11, pos: "DEF", positions: ["RB", "CB"], bracket: "U-13", photo: "david-madu", hue: 0, placeholderStats: true,
      number: 2, foot: "Right", height: "1.45 m", weight: "36 kg",
      front: [["Tackles", 78], ["Clean sheets", 5], ["Apps", 14]],
      attrs: { Pace: 72, Shooting: 40, Passing: 64, Dribbling: 56, Defending: 80, Physical: 70 },
      season: [["Appearances", 14], ["Clean sheets", 5], ["Goals", 1], ["Minutes", "980"], ["Tackles won", "76%"], ["Player of the match", 1]],
      bio: "A reliable defender who is comfortable at right-back and in the middle. David reads danger early, wins his duels and calmly clears his lines.",
      highlights: ["Strong in the tackle", "Reads the game", "Versatile across the back"]
    },
    {
      id: "david-silva", name: "David Silva", age: 10, pos: "FWD", positions: ["LW", "CF"], bracket: "U-10", photo: "david-silva", hue: 1, placeholderStats: true,
      number: 11, foot: "Left", height: "1.38 m", weight: "31 kg",
      front: [["Pace", 84], ["Goals", 12], ["Apps", 15]],
      attrs: { Pace: 84, Shooting: 70, Passing: 62, Dribbling: 80, Defending: 32, Physical: 52 },
      season: [["Appearances", 15], ["Goals", 12], ["Assists", 5], ["Minutes", "930"], ["Successful dribbles", "69%"], ["Player of the match", 3]],
      bio: "A quick left-footed attacker who loves to run at defenders from the wing and finish in the middle. David is learning when to release the ball early.",
      highlights: ["Quick off the mark", "Left-footed finisher", "Runs at defenders"]
    },
    {
      id: "emmanuel-olaifa", name: "Emmanuel Olaifa", age: 10, pos: "FWD", positions: ["RW", "LW"], bracket: "U-10", photo: "emmanuel-olaifa", hue: 2, placeholderStats: true,
      number: 7, foot: "Right", height: "1.36 m", weight: "30 kg",
      front: [["Dribbling", 83], ["Goals", 9], ["Apps", 15]],
      attrs: { Pace: 80, Shooting: 64, Passing: 66, Dribbling: 83, Defending: 30, Physical: 46 },
      season: [["Appearances", 15], ["Goals", 9], ["Assists", 8], ["Minutes", "900"], ["Successful dribbles", "72%"], ["Player of the match", 2]],
      bio: "A creative winger with quick feet and a big smile. Emmanuel plays on either flank, takes players on and loves to set up his team-mates.",
      highlights: ["Tight close control", "Plays both wings", "Creates chances"]
    },
    {
      id: "ibrahim-dahun", name: "Ibrahim Dahun", age: 10, pos: "DEF", positions: ["RB", "LB"], bracket: "U-10", photo: "ibrahim-dahun", hue: 0, placeholderStats: true,
      number: 3, foot: "Right", height: "1.37 m", weight: "31 kg",
      front: [["Pace", 80], ["Assists", 4], ["Apps", 14]],
      attrs: { Pace: 80, Shooting: 38, Passing: 66, Dribbling: 60, Defending: 74, Physical: 62 },
      season: [["Appearances", 14], ["Clean sheets", 4], ["Assists", 4], ["Minutes", "870"], ["Tackles won", "71%"], ["Player of the match", 1]],
      bio: "An athletic full-back who can play on either side. Ibrahim has the pace to recover quickly and likes to join the attack down the touchline.",
      highlights: ["Recovery pace", "Plays either flank", "Overlapping runs"]
    },
    {
      id: "sunday-tukur", name: "Sunday Tukur", age: 10, pos: "MID", positions: ["DM", "CM"], bracket: "U-10", photo: "sunday-tukur", hue: 1, placeholderStats: true,
      number: 6, foot: "Right", height: "1.40 m", weight: "33 kg",
      front: [["Passing", 78], ["Assists", 6], ["Apps", 15]],
      attrs: { Pace: 66, Shooting: 56, Passing: 78, Dribbling: 64, Defending: 70, Physical: 66 },
      season: [["Appearances", 15], ["Goals", 3], ["Assists", 6], ["Minutes", "940"], ["Pass accuracy", "82%"], ["Player of the match", 2]],
      bio: "A calm midfielder who protects the back line and keeps the ball moving. Sunday wins the ball back, passes simply and sets the rhythm for the team.",
      highlights: ["Breaks up play", "Simple, accurate passing", "Sets the rhythm"]
    },
    {
      id: "temi-erin", name: "Temi Erin", age: 11, pos: "FWD", positions: ["CF", "AM"], bracket: "U-13", photo: "temi-erin", hue: 2, placeholderStats: true,
      number: 9, foot: "Right", height: "1.47 m", weight: "37 kg",
      front: [["Shooting", 82], ["Goals", 14], ["Apps", 16]],
      attrs: { Pace: 76, Shooting: 82, Passing: 72, Dribbling: 78, Defending: 34, Physical: 60 },
      season: [["Appearances", 16], ["Goals", 14], ["Assists", 7], ["Minutes", "1,090"], ["Shots on target", "64%"], ["Player of the match", 4]],
      bio: "A smart forward who leads the line and drops into the pocket behind it. Temi links play well, finds space in the box and finishes calmly inside the area.",
      highlights: ["Clinical in the box", "Links play well", "Finds pockets of space"]
    },
    {
      id: "umar-umar", name: "Umar Umar", age: 11, pos: "DEF", positions: ["CB", "DM"], bracket: "U-13", photo: "umar-umar", hue: 0, placeholderStats: true,
      number: 5, foot: "Right", height: "1.50 m", weight: "40 kg",
      front: [["Tackles", 82], ["Clean sheets", 6], ["Apps", 15]],
      attrs: { Pace: 64, Shooting: 38, Passing: 62, Dribbling: 48, Defending: 82, Physical: 78 },
      season: [["Appearances", 15], ["Clean sheets", 6], ["Goals", 2], ["Minutes", "1,030"], ["Aerial duels won", "74%"], ["Player of the match", 2]],
      bio: "A strong centre-back who also fills in as a holding midfielder. Umar is tough to get past, wins most aerial duels and organises the players around him.",
      highlights: ["Strong in the air", "Organises the defence", "Can play as a holding midfielder"]
    }
  ],
  positionNames: {
    GK: "Goalkeeper", CB: "Centre-back", RB: "Right-back", LB: "Left-back", DM: "Defensive midfielder", CM: "Central midfielder",
    AM: "Attacking midfielder", RW: "Right wing", LW: "Left wing", CF: "Centre-forward", ST: "Striker"
  },

  samplePlayers: [
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
      sessions: "Sat & Sun, 5 PM", ratio: "Small groups, close coaching", outcome: "Confidence on the ball"
    },
    {
      id: "skills", tier: "U-10", name: "Skills",
      blurb: "Technique takes over. Passing, receiving and dribbling are repeated until they feel natural.",
      focus: ["First touch and passing patterns", "1v1 dribbling", "Introduction to positions"],
      sessions: "Sat & Sun, 4 PM", ratio: "Position-based groups", outcome: "Reliable technique under light pressure"
    },
    {
      id: "development", tier: "U-13", name: "Development",
      blurb: "Understanding the game: shape, movement and decisions, with regular fixtures to test it.",
      focus: ["Team shape and roles", "Pressing and transitions", "Fitness and injury prevention"],
      sessions: "Sat & Sun, 4 PM", ratio: "Squad-based coaching", outcome: "Match intelligence and consistency"
    },
    {
      id: "elite", tier: "U-16", name: "Elite Showcase",
      blurb: "The top of the pathway. Match-ready players are prepared for scouting and higher levels of football.",
      focus: ["Tactical preparation", "Strength and conditioning", "Video review and scouting profile"],
      sessions: "Sat & Sun, 2 PM", ratio: "Individual development plans", outcome: "Ready for the next level"
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
      photo: "./assets/photos/n-blue-2-t.jpg", alt: "Raven players and a coach in navy kit posing together on the training pitch"
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
    { photo: "./assets/photos/kit-ash-set.jpg", alt: "Ash and black matchday kit with the shirt and shorts crest", label: "Matchday set" },
    { photo: "./assets/photos/kit-navy.jpg",      alt: "Navy quarter-zip training top with the Raven crest", label: "Training top" },
    { photo: "./assets/photos/kit-black-close.jpg", alt: "Close-up of the Raven crest on a black jersey", label: "The crest" }
  ]
};
