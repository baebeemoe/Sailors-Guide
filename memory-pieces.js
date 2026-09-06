const memoryPieces = [
  {
    id: "traitor",
    name: "Traitor",
    rarity: "SSR",
    role: "Attacker",
    image: "assets/memory-pieces/traitor.png",
    baseStats: {
      atk: 33,
      def: 28,
      hp: 114
    },
    normal: {
      passiveName: "Crit Rate Lv.1",
      passiveText: "When entering battle, grants [7.0%] Increase Crit Rate to yourself.",
      effectName: "Traitor Lv.1",
      effectText: "When using an Ultimate Skill, grants [12.0%] Increase Earth DMG to yourself for [1] turn(s) and grants Betrayal for [1] turn(s).",
      breakName: "Traitor Break Skill",
      breakText: "Locked until further growth."
    },
    maxGrowth: {
      passiveName: "Crit Rate Lv.1",
      passiveText: "When entering battle, grants [7.0%] Increase Crit Rate to yourself.",
      effectName: "Traitor Lv.6",
      effectText: "When using an Ultimate Skill, grants [24.0%] Increase Earth DMG to yourself for [1] turn(s) and grants Betrayal for [1] turn(s).",
      breakName: "Traitor Break Skill",
      breakText: "When using an Ultimate Skill, grants [30.0%] Increase Crit Rate to yourself for [1] turn(s)."
    }
  },

  {
    id: "memory-placeholder-1",
    name: "Future Memory Piece",
    rarity: "SSR",
    role: "Defender",
    image: "",
    baseStats: { atk: 0, def: 0, hp: 0 },
    normal: {
      passiveName: "Effect pending",
      passiveText: "Add this Memory Piece's effect here.",
      effectName: "Skill pending",
      effectText: "Add this Memory Piece's role-specific effect here.",
      breakName: "Break Skill",
      breakText: "Add MAX Growth data later."
    },
    maxGrowth: {
      passiveName: "Effect pending",
      passiveText: "Add MAX Growth values here.",
      effectName: "Skill pending",
      effectText: "Add MAX Growth values here.",
      breakName: "Break Skill",
      breakText: "Add MAX Growth values here."
    }
  }
];

function renderMemoryPieces() {
  const grid = document.getElementById("memoryGrid");
  if (!grid) return;

  const tabs = document.querySelectorAll("[data-role]");
  const search = document.getElementById("memorySearch");
  const rarity = document.getElementById("rarityFilter");
  const count = document.getElementById("memoryCount");
  let activeRole = "all";

  function render() {
    const query = search.value.trim().toLowerCase();

    const filtered = memoryPieces.filter(piece => {
      const roleOk = activeRole === "all" || piece.role === activeRole;
      const rarityOk = rarity.value === "all" || piece.rarity === rarity.value;
      const searchOk = !query || piece.name.toLowerCase().includes(query);
      return roleOk && rarityOk && searchOk;
    });

    count.textContent = filtered.length;

    grid.innerHTML = filtered.map(piece => `
      <a class="memory-card" href="memory-piece.html?id=${encodeURIComponent(piece.id)}">
        <div class="memory-art">
          ${piece.image
            ? `<img src="${piece.image}" alt="${piece.name}">`
            : `<div class="memory-placeholder">◇</div>`}
          <span class="rarity">${piece.rarity}</span>
        </div>

        <div class="memory-card-body">
          <div class="memory-title-row">
            <div>
              <h2>${piece.name}</h2>
              <p>Memory Piece</p>
            </div>
            <span class="role-chip">${piece.role}</span>
          </div>

          <div class="memory-stats-mini">
            <span>ATK <strong>${piece.baseStats.atk}</strong></span>
            <span>DEF <strong>${piece.baseStats.def}</strong></span>
            <span>HP <strong>${piece.baseStats.hp}</strong></span>
          </div>

          <div class="badges">
            <span>${piece.role} Only</span>
            <span>View Details →</span>
          </div>
        </div>
      </a>
    `).join("");
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(x => x.classList.remove("active"));
      tab.classList.add("active");
      activeRole = tab.dataset.role;
      render();
    });
  });

  search.addEventListener("input", render);
  rarity.addEventListener("change", render);
  render();
}

const memoryMenuBtn = document.getElementById("menuBtn");
const memoryNav = document.getElementById("navLinks");
if (memoryMenuBtn && memoryNav) {
  memoryMenuBtn.addEventListener("click", () => memoryNav.classList.toggle("open"));
}

renderMemoryPieces();
