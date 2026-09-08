const grid = document.getElementById("characterGrid");
const resultCount = document.getElementById("resultCount");
const tabs = document.querySelectorAll(".db-tab");
const elementFilter = document.getElementById("elementFilter");
const roleFilter = document.getElementById("roleFilter");
const timeFilter = document.getElementById("timeFilter");
const searchInput = document.getElementById("searchInput");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let activeType = "all";

function elementClass(element) {
  return String(element || "").toLowerCase();
}

function typeLabel(item) {
  if (item.type === "adventurer") return "Adventurer Class";
  return item.partnerType || "Partner";
}

function rarityRank(item) {
  if (item.type === "adventurer") return 0;
  const ranks = { SSR: 0, SR: 1, R: 2, N: 3 };
  return ranks[item.rarity] ?? 99;
}

function typeRank(item) {
  const ranks = { adventurer: 0, battle: 1, assist: 2 };
  return ranks[item.type] ?? 99;
}

function sortRoster(a, b) {
  // Keep each roster category together, then show highest rarity first.
  const byType = typeRank(a) - typeRank(b);
  if (byType !== 0) return byType;

  if (a.type === "battle" || a.type === "assist") {
    const byRarity = rarityRank(a) - rarityRank(b);
    if (byRarity !== 0) return byRarity;
  }

  // Preserve the curated order from game-data.js inside the same rarity group.
  return allCharacterEntries.indexOf(a) - allCharacterEntries.indexOf(b);
}

function render() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = allCharacterEntries.filter(item => {
    const typeOk = activeType === "all" || item.type === activeType;
    const elementOk = elementFilter.value === "all" || item.element === elementFilter.value;
    const roleOk = roleFilter.value === "all" || item.role === roleFilter.value;
    const timeOk = timeFilter.value === "all" || item.timeTrait === timeFilter.value;
    const searchOk = !query || item.name.toLowerCase().includes(query);
    return typeOk && elementOk && roleOk && timeOk && searchOk;
  }).sort(sortRoster);

  resultCount.textContent = filtered.length;

  grid.innerHTML = filtered.map(item => `
    <a class="character-card" href="character.html?id=${encodeURIComponent(item.id)}&type=${item.type}">
      <div class="portrait ${item.type}">
        <span class="rarity">${item.rarity}</span>
        <span class="type-badge">${typeLabel(item)}</span>
        ${item.image ? `<img class="character-image" src="${item.image}" alt="${item.name}">` : `<span class="portrait-icon">${item.icon || "✦"}</span>`}
      </div>
      <div class="card-body">
        <div class="card-top">
          <div>
            <h2>${item.name}</h2>
            <p>${typeLabel(item)}</p>
          </div>
          <span class="element ${elementClass(item.element)}">${item.element}</span>
        </div>
        <div class="attribute-row">
          <span>${item.role}</span>
          <span>${item.timeTrait}</span>
        </div>
        <div class="badges">
          <span>${item.type === "adventurer" ? `Tier ${item.tier || ""}` : item.partnerType}</span>
          <span>View Guide →</span>
        </div>
      </div>
    </a>
  `).join("");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(x => x.classList.remove("active"));
    tab.classList.add("active");
    activeType = tab.dataset.type;
    render();
  });
});

[elementFilter, roleFilter, timeFilter].forEach(el => el.addEventListener("change", render));
searchInput.addEventListener("input", render);

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

render();
