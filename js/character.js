const params = new URLSearchParams(location.search);
const id = params.get("id");
const type = params.get("type");
const page = document.getElementById("characterPage");

const pool = type === "adventurer" ? gameData.adventurers : gameData.characters;
const character = pool.find(x => x.id === id) || allCharacterEntries[0];

function labelType(item) {
  return item.type === "adventurer" ? "Adventurer Class" : item.partnerType;
}

function renderSkillCard(skill, key) {
  const unlock = skill.unlockStars ? `<span class="skill-unlock">Unlocks at ${skill.unlockStars}★</span>` : "";
  const sp = skill.sp ? `<span class="skill-sp">SP ${skill.sp}</span>` : "";
  const limit = skill.usageLimit ? `<span class="skill-limit">${skill.usageLimit} uses per battle</span>` : "";
  const tags = (skill.tags || []).map(tag => `<span>${tag}</span>`).join("");
  const special = key === "ultimate" ? " ultimate" : (key === "trait" || key === "passive" ? " passive" : key === "break" ? " break" : "");
  return `
    <article class="skill-card${special}">
      <div class="skill-card-head">
        <div>
          <p class="skill-kind">${skill.type}</p>
          <h3>${skill.name}</h3>
        </div>
        <div class="skill-meta"><span>Lv.${skill.level}</span>${sp}${unlock}${limit}</div>
      </div>
      <p class="skill-description">${skill.text}</p>
      ${tags ? `<div class="skill-tags">${tags}</div>` : ""}
    </article>`;
}

function renderSkills() {
  const data = typeof characterSkills !== "undefined" ? characterSkills[character.id] : null;
  if (!data) {
    return `<div class="skills-empty"><strong>Skills coming soon</strong><p>This character's verified skill data has not been added yet.</p></div>`;
  }
  const order = ["basic","skill1","skill2","ultimate","break","trait","passive"];
  const cards = order.filter(key => data[key]).map(key => renderSkillCard(data[key], key)).join("");
  const progression = character.type === "adventurer"
    ? `<div class="skill-note"><strong>Adventurer note</strong><span>Adventurers can have a unique Break Skill. Trait unlocks at 3★ and Passive at 5★ when available.</span></div>`
    : `<div class="skill-note"><strong>Star progression</strong><span>Trait unlocks at 3★. Passive unlocks at 5★. Missing entries are left unlisted until verified.</span></div>`;
  return `${progression}<div class="skills-grid">${cards}</div>`;
}

function memoryById(memoryId) {
  return typeof memoryPieces !== "undefined" ? memoryPieces.find(piece => piece.id === memoryId) : null;
}

function memoryImage(piece) {
  if (!piece) return "";
  if (piece.image) return piece.image;
  return `assets/memory-pieces/${piece.id}.jpg`;
}

function renderMemoryRecommendations() {
  const recs = typeof memoryRecommendations !== "undefined" ? memoryRecommendations[character.id] : null;
  if (!recs || !recs.length) {
    return `<div class="memory-empty"><strong>Recommendations coming soon</strong><p>We will add recommendations after this character's verified skill kit is available.</p></div>`;
  }
  const cards = recs.map(rec => {
    const piece = memoryById(rec.id);
    if (!piece) return "";
    const stars = "★".repeat(rec.rating) + "☆".repeat(5 - rec.rating);
    const image = memoryImage(piece);
    return `<a class="memory-rec-card" href="memory-piece.html?id=${encodeURIComponent(piece.id)}">
      <div class="memory-rec-art">${image ? `<img src="${image}" alt="${piece.name}">` : `<div class="memory-rec-placeholder">◇</div>`}<span class="memory-rec-rarity">${piece.rarity}</span></div>
      <div class="memory-rec-copy">
        <div class="memory-rec-label">${rec.label}</div>
        <h3>${piece.name}</h3>
        <div class="memory-rec-stars" aria-label="${rec.rating} out of 5 stars">${stars}</div>
        <p>${rec.reason}</p>
        <span class="memory-rec-role">${piece.role} Memory · View Details →</span>
      </div>
    </a>`;
  }).join("");
  return `<div class="memory-recommendation-grid">${cards}</div><div class="memory-method-note">Recommendations are based on direct kit synergy with the Memory Pieces currently documented in Beemoe's Guide. Ratings can be refined later as we add more characters, team interactions, MAX Growth data, gear and combat testing.</div>`;
}

document.title = `${character.name} | Beemoe's Guide`;

page.innerHTML = `
  <section class="character-hero">
    <div class="wrap character-hero-grid">
      <div class="large-portrait ${character.type}">
        <span class="rarity">${character.rarity}</span>
        <span class="hero-type">${labelType(character)}</span>
        ${character.image ? `<img class="character-hero-image" src="${character.image}" alt="${character.name}">` : `<span class="big-icon">${character.icon || "✦"}</span>`}
      </div>

      <div>
        <p class="eyebrow">${labelType(character).toUpperCase()}</p>
        <h1>${character.name}</h1>
        <p class="tagline">${character.type === "adventurer" ? "Main Character class entry." : `${character.partnerType} character entry.`}</p>
        <div class="hero-tags">
          <span class="element ${character.element.toLowerCase()}">${character.element}</span>
          <span>${character.role}</span><span>${character.timeTrait}</span>
          ${character.tier ? `<span>Tier ${character.tier}</span>` : ""}
        </div>
      </div>
    </div>
  </section>

  <div class="tab-shell"><div class="wrap tabs">
    <a class="active" href="#overview">Overview</a><a href="#skills">Skills</a><a href="#memory">Memory Pieces</a><a href="#gear">Recommended Gear</a><a href="#teams">Recommended Team</a><a href="#showcase">Showcase</a>
  </div></div>

  <div class="wrap detail-content">
    <section id="overview" class="detail-section">
      <p class="eyebrow">OVERVIEW</p><h2>${character.name} Overview</h2>
      <div class="overview-grid">
        <div class="overview-panel"><span>Character Type</span><strong>${labelType(character)}</strong></div>
        <div class="overview-panel"><span>Element</span><strong>${character.element}</strong></div>
        <div class="overview-panel"><span>Role</span><strong>${character.role}</strong></div>
        <div class="overview-panel"><span>Time Trait</span><strong>${character.timeTrait}</strong></div>
      </div>
      <p class="lead content-placeholder">Detailed strengths, weaknesses, investment recommendations, and beginner notes will be expanded as more verified gameplay data is added.</p>
    </section>

    <section id="skills" class="detail-section skills-section">
      <p class="eyebrow">ABILITIES</p><h2>${character.name} Skills</h2>${renderSkills()}
    </section>

    <section id="memory" class="detail-section">
      <p class="eyebrow">MEMORY PIECES</p><h2>Recommended Memory Pieces</h2>
      ${renderMemoryRecommendations()}
    </section>

    <section id="gear" class="detail-section"><p class="eyebrow">LOADOUT</p><h2>Recommended Gear</h2><div class="placeholder-block"><span>Gear recommendation placeholder</span><p>Add best sets, main stats, substat priority, and alternatives.</p></div></section>
    <section id="teams" class="detail-section"><p class="eyebrow">SYNERGY</p><h2>Recommended Team</h2><div class="placeholder-block"><span>Team recommendation placeholder</span><p>Recommended formations will use the full Main Character + Battle + Assist + Monster structure.</p><a class="mini-link" href="team-builder.html">Open Team Builder →</a></div></section>
    <section id="showcase" class="detail-section"><p class="eyebrow">GAMEPLAY</p><h2>Showcase</h2><div class="showcase"><div class="play">▶</div><h3>${character.name} Showcase</h3><p>Add a gameplay video, rotation demo, boss clear, or build showcase here.</p></div></section>
  </div>`;

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

const sectionTabs = [...document.querySelectorAll("#characterPage .tabs a")];
const detailSections = [...document.querySelectorAll("#characterPage .detail-section")];
function setActiveTab(sectionId) {
  sectionTabs.forEach(tab => {
    const active = tab.getAttribute("href") === `#${sectionId}`;
    tab.classList.toggle("active", active);
    if (active) tab.setAttribute("aria-current", "location"); else tab.removeAttribute("aria-current");
  });
}
sectionTabs.forEach(tab => {
  tab.addEventListener("click", event => {
    const target = document.querySelector(tab.getAttribute("href"));
    if (!target) return;
    event.preventDefault(); target.scrollIntoView({behavior:"smooth",block:"start"});
    history.replaceState(null,"",tab.getAttribute("href")); setActiveTab(target.id);
  });
});
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
  if (visible) setActiveTab(visible.target.id);
},{rootMargin:"-18% 0px -62% 0px",threshold:[0,.1,.25,.5]});
detailSections.forEach(section => sectionObserver.observe(section));
