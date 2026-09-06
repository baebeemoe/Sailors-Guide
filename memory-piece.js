const memoryParams = new URLSearchParams(location.search);
const memoryId = memoryParams.get("id") || "traitor";
const memoryPiece = memoryPieces.find(x => x.id === memoryId) || memoryPieces[0];
const detailRoot = document.getElementById("memoryDetail");

let showingMaxGrowth = false;

function effectBlock(icon, title, text, extraClass = "") {
  return `
    <article class="effect-block ${extraClass}">
      <div class="effect-icon">${icon}</div>
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    </article>
  `;
}

function renderMemoryDetail() {
  const growth = showingMaxGrowth ? memoryPiece.maxGrowth : memoryPiece.normal;

  document.title = `${memoryPiece.name} | Memory Piece | Beemoe's Guide`;

  detailRoot.innerHTML = `
    <section class="memory-detail-hero">
      <div class="wrap memory-detail-grid">

        <div class="memory-detail-art">
          <div class="memory-card-frame ${showingMaxGrowth ? "max-growth-active" : ""}">
            ${memoryPiece.image
              ? `<img src="${memoryPiece.image}" alt="${memoryPiece.name}">`
              : `<div class="memory-placeholder large">◇</div>`}
          </div>
        </div>

        <div class="memory-info-panel">
          <div class="memory-banner">
            <div>
              <p class="eyebrow">MEMORY PIECE</p>
              <h1>${memoryPiece.name}</h1>
            </div>
            <span class="memory-rarity">${memoryPiece.rarity}</span>
          </div>

          <div class="memory-meta-row">
            <span class="role-chip">${memoryPiece.role}</span>
            <span class="restriction-text">Skill effect only applies to ${memoryPiece.role}</span>
          </div>

          <div class="base-stat-panel">
            <div><span>Basic ATK</span><strong>${memoryPiece.baseStats.atk}</strong></div>
            <div><span>Basic DEF</span><strong>${memoryPiece.baseStats.def}</strong></div>
            <div><span>Basic HP</span><strong>${memoryPiece.baseStats.hp}</strong></div>
          </div>

          <div class="effect-stack">
            ${effectBlock("◇", growth.passiveName, growth.passiveText)}
            ${effectBlock("✦", growth.effectName, growth.effectText)}
            ${effectBlock("◆", growth.breakName, growth.breakText, showingMaxGrowth ? "" : "locked-effect")}
          </div>

          <div class="max-growth-control">
            <div>
              <span>See MAX Growth</span>
              <small>${showingMaxGrowth ? "MAX Growth values enabled" : "Current growth values"}</small>
            </div>

            <button
              id="maxGrowthToggle"
              class="growth-toggle ${showingMaxGrowth ? "active" : ""}"
              aria-pressed="${showingMaxGrowth}"
              aria-label="Toggle MAX Growth"
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="wrap memory-notes">
      <div class="memory-note-card">
        <p class="eyebrow">ROLE COMPATIBILITY</p>
        <h2>${memoryPiece.role} Memory Piece</h2>
        <p>
          This Memory Piece's role-specific skill effect only applies when equipped by a
          <strong>${memoryPiece.role}</strong>.
        </p>
      </div>

      <div class="memory-note-card">
        <p class="eyebrow">GUIDE NOTES</p>
        <h2>Recommended Users</h2>
        <p>
          Character recommendations can be connected here later, so players can see exactly
          which ${memoryPiece.role} characters benefit most from ${memoryPiece.name}.
        </p>
      </div>
    </section>
  `;

  document.getElementById("maxGrowthToggle").addEventListener("click", () => {
    showingMaxGrowth = !showingMaxGrowth;
    renderMemoryDetail();
  });
}

const detailMenuBtn = document.getElementById("menuBtn");
const detailNav = document.getElementById("navLinks");
if (detailMenuBtn && detailNav) {
  detailMenuBtn.addEventListener("click", () => detailNav.classList.toggle("open"));
}

renderMemoryDetail();
