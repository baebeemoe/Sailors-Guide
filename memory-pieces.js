function makeMemoryPiece({
  id, name, rarity, role, image = "", stats, passive, effect, breakSkill,
  maxStats = null, maxGrowth = null
}) {
  return {
    id,
    name,
    rarity,
    role,
    image,
    normalStats: { atk: stats[0], def: stats[1], hp: stats[2] },
    maxStats,
    normal: {
      passiveName: passive[0],
      passiveText: passive[1],
      effectName: effect[0],
      effectText: effect[1],
      breakName: breakSkill[0],
      breakText: breakSkill[1]
    },
    maxGrowth
  };
}

const memoryPieces = [
  makeMemoryPiece({
    id: "traitor", name: "Traitor", rarity: "SSR", role: "Attacker",
    image: "assets/memory-pieces/traitor.png", stats: [33, 28, 114],
    passive: ["Crit Rate Lv.1", "When entering battle, grants [7.0%] Increase Crit Rate to yourself."],
    effect: ["Traitor Lv.1", "When using an Ultimate Skill, grants [12.0%] Increase Earth DMG to yourself for [1] turn(s) and grants Betrayal for [1] turn(s)."],
    breakSkill: ["Traitor Break Skill", "When using an Ultimate Skill, grants [30.0%] Increase Crit Rate to yourself for [1] turn(s)."],
    maxStats: { atk: 680, def: 577, hp: 2348 },
    maxGrowth: {
      passiveName: "Crit Rate Lv.1",
      passiveText: "When entering battle, grants [7.0%] Increase Crit Rate to yourself.",
      effectName: "Traitor Lv.6",
      effectText: "When using an Ultimate Skill, grants [24.0%] Increase Earth DMG to yourself for [1] turn(s) and grants Betrayal for [1] turn(s).",
      breakName: "Traitor Break Skill",
      breakText: "When using an Ultimate Skill, grants [30.0%] Increase Crit Rate to yourself for [1] turn(s)."
    }
  }),

  makeMemoryPiece({ id:"secret-garden", name:"Secret Garden", rarity:"SSR", role:"Debuffer", stats:[30,31,114], passive:["ACC Lv.1","When entering battle, grants [10.0%] Increase ACC to yourself."], effect:["Secret Garden Lv.1","When ally turn starts, grants Secret Garden to all enemies with a [90.0%] chance. Grants [+1] SP Recovery to yourself with a [50.0%] chance."], breakSkill:["Secret Garden Break Skill","When removing a buff, grants [50.0%] Increase Chain Mastery to yourself for [3] turn(s)."] }),
  makeMemoryPiece({ id:"princess-no-8502-8503", name:"Princess No. 8502, 8503...", rarity:"SSR", role:"Defender", stats:[27,30,132], passive:["DEF Lv.1","When entering battle, grants [10.0%] Increase DEF to yourself."], effect:["Princess No. 8502, 8503... Lv.1","When losing HP, grants Over Here (Increase DMG dealt by 0.8%) to all deployed allies for [3] turn(s)."], breakSkill:["Princess No. 8502, 8503... Break Skill","When removing a buff, grants Recovery equal to [15.0%] of your DEF to all deployed allies and grants [10.0%] That One to all enemies for [2] turn(s)."] }),
  makeMemoryPiece({ id:"red-hair", name:"Red Hair", rarity:"SSR", role:"Supporter", stats:[30,28,126], passive:["ATK Lv.1","When entering battle, grants [10.0%] Increase ATK to yourself."], effect:["Red Hair Lv.1","When using Recovery, grants [+1] Burning Locks (Increase Light DMG by 1.5%) to all allies."], breakSkill:["Red Hair Break Skill","When attacking, grants [30.0%] Increase Chain Mastery to yourself for [2] turn(s)."] }),
  makeMemoryPiece({ id:"heidis-world", name:"Heidi's World", rarity:"SSR", role:"Attacker", stats:[33,28,114], passive:["Attack Power and Accuracy Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself and grants [5.0%] Increase ACC."], effect:["Heidi's World Lv.1","When applying a debuff, grants Red Temptation (Increase Additional DMG by 1.0%) to yourself. If Red Temptation is fully stacked, grants [10.0%] Increase Fire RES PEN to yourself for [2] turn(s)."], breakSkill:["Heidi's World Break Skill","When applying a debuff, grants effects according to Red Temptation stacks: [5]+ grants [10.0%] Increase Fire DMG, [10]+ grants [20.0%], and [15]+ grants [30.0%], each for [2] turn(s)."] }),
  makeMemoryPiece({ id:"guardian-of-light", name:"Guardian of Light", rarity:"SSR", role:"Defender", stats:[27,30,132], passive:["DEF Lv.1","When entering battle, grants [10.0%] Increase DEF to yourself."], effect:["Guardian of Light Lv.1","When granting Shield, grants [20.0%] Decrease Crit DMG Received to all deployed allies for [1] turn(s). If you are already in the Shield state, grants [+1] Chain Bonus."], breakSkill:["Guardian of Light Break Skill","If you are in the [Shield] state when ally turn starts, grants [+1] SP Recovery to yourself. If you have [100%] HP, grants [15.0%] Shield to yourself for [1] turn(s)."] }),
  makeMemoryPiece({ id:"knight-of-light", name:"Knight of Light", rarity:"SSR", role:"Attacker", stats:[33,28,114], passive:["ATK Lv.1","When entering battle, grants [10.0%] Increase ATK to yourself."], effect:["Knight of Light Lv.1","When using an Ultimate Skill, grants [15.0%] Increase Crit Rate to yourself for [1] turn(s). If you are in the Shield state, grants [10.0%] Increase Dark RES PEN to yourself for [1] turn(s)."], breakSkill:["Knight of Light Break Skill","When granting Shield, grants Harmony Glow to yourself for [3] turn(s)."] }),
  makeMemoryPiece({ id:"bubble", name:"Bubble", rarity:"SSR", role:"Defender", stats:[27,30,132], passive:["MAX HP Lv.1","When entering battle, grants [10.0%] Increase MAX HP to yourself."], effect:["Bubble Lv.1","When applying a debuff, grants [2.0%] Increase RES to yourself for [2] turn(s) and grants [+1] SP Recovery to all deployed allies with a [50.0%] chance each."], breakSkill:["Bubble Break Skill","When using an Ultimate Skill, grants [12.0%] Increase MAX HP to yourself and grants Bubbles to all deployed allies for [1] turn(s)."] }),
  makeMemoryPiece({ id:"fading-memories", name:"Fading Memories", rarity:"SSR", role:"Attacker", stats:[33,28,114], passive:["Crit Rate Lv.1","When entering battle, grants [7.0%] Increase Crit Rate to yourself."], effect:["Fading Memories Lv.1","When using an Active Skill, grants [10.0%] Increase Active Skill DMG to yourself for [1] turn(s) and [+1] Afterglow Beyond Memories (Increase Light DMG by 2.0%). If Afterglow Beyond Memories is fully stacked, grants [+1] SP Recovery."], breakSkill:["Fading Memories Break Skill","When using an Assist Skill, grants [+1] Afterglow Beyond Memories (Increase Light DMG by 2.0%) to yourself and grants [30.0%] Increase Crit DMG for [2] turn(s)."] }),
  makeMemoryPiece({ id:"summer-nights-full-dream", name:"Summer Night's Full Dream", rarity:"SSR", role:"Defender", stats:[27,30,132], passive:["HP and Accuracy Lv.1","When entering battle, grants [5.0%] Increase MAX HP to yourself and grants [5.0%] Increase ACC."], effect:["Summer Night's Full Dream Lv.1","When ally turn starts, grants Recovery equal to [5.0%] of your final HP to yourself and grants Moonstruck Love for [2] turn(s) to taunted targets."], breakSkill:["Summer Night's Full Dream Break Skill","When ally turn starts, grants Increase RES for [1] turn(s) according to your HP: [90%]+ HP grants [100.0%], [70%]+ grants [75.0%], and [50%]+ grants [50.0%]."] }),
  makeMemoryPiece({ id:"suikawari-bring-it", name:"Suikawari? Bring It!", rarity:"SSR", role:"Supporter", stats:[30,28,126], passive:["ATK Lv.1","When entering battle, grants [10.0%] Increase ATK to yourself."], effect:["Suikawari? Bring It! Lv.1","When using Recovery, grants [15.0%] Increase Crit DMG to all allies for [1] turn(s) and grants [+1] Watermelon Slice! to yourself. If Watermelon Slice! is fully stacked, uses all stacks to grant [+5] Chain Bonus to yourself."], breakSkill:["Suikawari? Bring It! Break Skill","When entering battle, grants [+10] SP Recovery to yourself."] }),
  makeMemoryPiece({ id:"reason-to-live", name:"Reason to Live", rarity:"SSR", role:"Attacker", stats:[33,28,114], passive:["Crit Rate Lv.1","When entering battle, grants [7.0%] Increase Crit Rate to yourself."], effect:["Reason to Live Lv.1","When using an Assist Skill, grants Shield equal to [15.0%] of your final ATK to yourself for [1] turn(s) if you have 15 SP or less. Otherwise, grants [15.0%] Increase Ultimate Skill DMG to yourself for [1] turn(s)."], breakSkill:["Reason to Live Break Skill","When using an Assist Skill, grants [+1] Reason for Brilliance (Increase Light DMG by 3.0%) to yourself. If you have 16 SP or more, additionally grants [+1] Reason for Brilliance."] }),
  makeMemoryPiece({ id:"guardian-of-the-earth", name:"Guardian of the Earth", rarity:"SSR", role:"Supporter", stats:[30,28,126], passive:["MAX HP Lv.1","When entering battle, grants [10.0%] Increase MAX HP to yourself."], effect:["Guardian of the Earth Lv.1","When using an Active Skill, grants Guardian (Decrease DMG received by 3.5%) to yourself."], breakSkill:["Guardian of the Earth Break Skill","When using an Ultimate Skill, grants [1] SP Recovery to a random ally."] }),

  makeMemoryPiece({ id:"blood-temptation", name:"Blood Temptation", rarity:"SR", role:"Attacker", stats:[24,21,85], passive:["ATK Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself."], effect:["Blood Temptation Lv.1","When ally turn starts, if you have [75%] or more HP, grants [15.0%] Increase Chain Mastery to yourself for [1] turn(s)."], breakSkill:["Blood Temptation Break Skill","When ally turn starts, if your HP is below [75%], grants Recovery equal to [50.0%] of your final ATK to yourself."] }),
  makeMemoryPiece({ id:"legendary-ore", name:"Legendary Ore", rarity:"SR", role:"Defender", stats:[20,22,99], passive:["DEF Lv.1","When entering battle, grants [5.0%] Increase DEF to yourself."], effect:["Legendary Ore Lv.1","When using an Ultimate Skill, grants [15.0%] Increase DEF to yourself for [3] turn(s)."], breakSkill:["Legendary Ore Break Skill","When using an Active Skill, grants [5.0%] Decrease DMG Received to yourself for [1] turn(s)."] }),
  makeMemoryPiece({ id:"wanna-be-friends", name:"Wanna Be Friends?", rarity:"SR", role:"Debuffer", stats:[22,23,85], passive:["ACC Lv.1","When entering battle, grants [5.0%] Increase ACC to yourself."], effect:["Wanna Be Friends? Lv.1","When using an Assist Skill, grants [10.0%] Decrease ATK to the most recent target for [2] turn(s)."], breakSkill:["Wanna Be Friends? Break Skill","When using an Assist Skill, grants [+1] Chain Bonus."] }),
  makeMemoryPiece({ id:"eat-heart", name:"Eat♥", rarity:"SR", role:"Supporter", stats:[22,21,94], passive:["MAX HP Lv.1","When entering battle, grants [5.0%] Increase MAX HP to yourself."], effect:["Eat♥ Lv.1","When using an Active Skill, grants [5.0%] Recovery to all deployed allies."], breakSkill:["Eat♥ Break Skill","When using an Ultimate Skill, grants [10.0%] Increase Heal Bonus to yourself for [3] turn(s)."] }),
  makeMemoryPiece({ id:"silver-ravens-leader", name:"Silver Ravens Leader", rarity:"SR", role:"Attacker", stats:[24,21,85], passive:["Crit DMG Lv.1","When entering battle, grants [7.0%] Increase Crit DMG to yourself."], effect:["Silver Ravens Leader Lv.1","When using an Active Skill, grants [20.0%] Increase ATK to yourself for [2] turn(s)."], breakSkill:["Silver Ravens Leader Break Skill","When using an Ultimate Skill, grants [15.0%] Increase Earth DMG to yourself for [1] turn(s)."] }),
  makeMemoryPiece({ id:"ah-my-cake", name:"Ah! My Cake", rarity:"SR", role:"Debuffer", stats:[22,23,85], passive:["ACC Lv.1","When entering battle, grants [5.0%] Increase ACC to yourself."], effect:["Ah! My Cake Lv.1","When using an Ultimate Skill, grants [15.0%] Increase Chain Mastery to yourself for [2] turn(s)."], breakSkill:["Ah! My Cake Break Skill","When using an Ultimate Skill, grants [+4] Chain Bonus to yourself."] }),
  makeMemoryPiece({ id:"the-159th-princess", name:"The 159th Princess", rarity:"SR", role:"Defender", stats:[20,22,99], passive:["DEF Lv.1","When entering battle, grants [5.0%] Increase DEF to yourself."], effect:["The 159th Princess Lv.1","When losing HP from a hit, grants [10.0%] Increase DEF to yourself for [2] turn(s)."], breakSkill:["The 159th Princess Break Skill","When using an Ultimate Skill, grants [15.0%] Decrease DMG Received to yourself for [2] turn(s)."] }),
  makeMemoryPiece({ id:"dad-role", name:"Dad Role", rarity:"SR", role:"Defender", stats:[20,22,99], passive:["MAX HP Lv.1","When entering battle, grants [5.0%] Increase MAX HP to yourself."], effect:["Dad Role Lv.1","When taking action, grants [7.5%] Recovery to yourself with a [50.0%] chance."], breakSkill:["Dad Role Break Skill","When entering battle, grants [10.0%] Increase Heal Bonus Received to yourself."] }),
  makeMemoryPiece({ id:"reminiscence", name:"Reminiscence", rarity:"SR", role:"Supporter", stats:[22,21,94], passive:["ATK Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself."], effect:["Reminiscence Lv.1","When using an Ultimate Skill, grants [10.0%] Increase Crit DMG to all allies for [2] turn(s)."], breakSkill:["Reminiscence Break Skill","When using an Assist Skill, grants [+1] Chain Bonus."] }),
  makeMemoryPiece({ id:"lifesaver", name:"Lifesaver", rarity:"SR", role:"Attacker", stats:[24,21,85], passive:["ATK Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself."], effect:["Lifesaver Lv.1","When using an Assist Skill, grants [10.0%] Increase Crit Rate to yourself for [2] turn(s)."], breakSkill:["Lifesaver Break Skill","When entering battle, grants [20.0%] Increase Chain Mastery to yourself for [5] turn(s)."] }),

  makeMemoryPiece({ id:"kaira", name:"Kaira", rarity:"SR", role:"Supporter", stats:[22,21,94], passive:["ATK Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself."], effect:["Kaira Lv.1","When using Recovery, grants [1.0%] Increase ATK to yourself."], breakSkill:["Kaira Break Skill","When using Recovery, grants [15.0%] Decrease DMG Received to yourself for [1] turn(s)."] }),
  makeMemoryPiece({ id:"contract-with-the-devil", name:"Contract with the Devil", rarity:"SR", role:"Attacker", stats:[24,21,85], passive:["ATK Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself."], effect:["Contract with the Devil Lv.1","When applying a debuff, grants [20.0%] Increase ATK to yourself for [2] turn(s)."], breakSkill:["Contract with the Devil Break Skill","When using an Active Skill, grants [20.0%] Increase ACC to yourself for [2] turn(s)."] }),
  makeMemoryPiece({ id:"silent-whisper", name:"Silent Whisper", rarity:"SR", role:"Supporter", stats:[22,21,94], passive:["MAX HP Lv.1","When entering battle, grants [5.0%] Increase MAX HP to yourself."], effect:["Silent Whisper Lv.1","When ally turn starts, grants Recovery equal to [10.0%] of your final HP to the ally with the lowest HP ratio."], breakSkill:["Silent Whisper Break Skill","When using an Assist Skill, grants [10.0%] Increase Heal Bonus to yourself for [2] turn(s)."] }),
  makeMemoryPiece({ id:"persevering-belief", name:"Persevering Belief", rarity:"SR", role:"Defender", stats:[20,22,99], passive:["MAX HP Lv.1","When entering battle, grants [5.0%] Increase MAX HP to yourself."], effect:["Persevering Belief Lv.1","If your HP is below 50% after taking a hit, grants Shield equal to [15.0%] of your final HP for [1] turn(s). (Cooldown: 1 turn)"], breakSkill:["Persevering Belief Break Skill","If your HP is below 50% when ally turn starts, grants [20.0%] Increase Heal Bonus Received to yourself."] }),
  makeMemoryPiece({ id:"supporting-belief", name:"Supporting Belief", rarity:"SR", role:"Supporter", stats:[22,21,94], passive:["Heal Bonus Lv.1","When entering battle, grants [5.0%] Increase Heal Bonus to yourself."], effect:["Supporting Belief Lv.1","When removing a debuff, grants [15.0%] Increase ATK to all deployed allies for [2] turn(s)."], breakSkill:["Supporting Belief Break Skill","When entering battle, grants [15.0%] Increase ATK to yourself."] }),
  makeMemoryPiece({ id:"carat-the-strongest-wind", name:"Carat, the Strongest Wind!", rarity:"SR", role:"Attacker", stats:[24,21,85], passive:["ATK Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself."], effect:["Carat, the Strongest Wind! Lv.1","When dealing additional damage, grants [20.0%] Increase ATK to yourself for [2] turn(s)."], breakSkill:["Carat, the Strongest Wind! Break Skill","When entering battle, grants [10.0%] Increase Ultimate Skill DMG to yourself."] }),
  makeMemoryPiece({ id:"world-blooming-at-the-brush-tip", name:"World Blooming at the Brush Tip", rarity:"SR", role:"Debuffer", stats:[22,23,85], passive:["ACC Lv.1","When entering battle, grants [5.0%] Increase ACC to yourself."], effect:["World Blooming at the Brush Tip Lv.1","When attacking, grants [16.0%] Decrease RES to the most recent target for [3] turn(s) with a [70.0%] chance."], breakSkill:["World Blooming at the Brush Tip Break Skill","When entering battle, grants [10.0%] Increase Chain Mastery to yourself."] }),
  makeMemoryPiece({ id:"battle-preparation", name:"Battle Preparation", rarity:"SR", role:"Attacker", stats:[24,21,85], passive:["ATK Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself."], effect:["Battle Preparation Lv.1","If you are in the Shield state when ally turn starts, grants [30.0%] Increase ATK to yourself for [1] turn(s)."], breakSkill:["Battle Preparation Break Skill","When using an Active Skill, grants Recovery equal to [30.0%] of your ATK to the ally with the lowest HP ratio."] }),
  makeMemoryPiece({ id:"lost-child", name:"Lost Child", rarity:"SR", role:"Defender", stats:[20,22,99], passive:["MAX HP Lv.1","When entering battle, grants [5.0%] Increase MAX HP to yourself."], effect:["Lost Child Lv.1","When losing HP from a hit, grants [10.0%] Increase Heal Bonus Received to yourself for [2] turn(s)."], breakSkill:["Lost Child Break Skill","If your HP is below [50%] when ally turn starts, grants Recovery equal to [15.0%] of your final HP to yourself."] }),
  makeMemoryPiece({ id:"item-whereabouts", name:"Item Whereabouts", rarity:"SR", role:"Debuffer", stats:[22,23,85], passive:["ACC Lv.1","When entering battle, grants [5.0%] Increase ACC to yourself."], effect:["Item Whereabouts Lv.1","When using an Active Skill, grants [30.0%] Increase Chain Mastery to yourself for [1] turn(s) with a [50.0%] chance."], breakSkill:["Item Whereabouts Break Skill","When entering battle, grants [20.0%] Increase Chain Mastery to yourself for [5] turn(s)."] }),
  makeMemoryPiece({ id:"bonus-leave", name:"Bonus Leave", rarity:"SR", role:"Attacker", stats:[24,21,85], passive:["ATK Lv.1","When entering battle, grants [5.0%] Increase ATK to yourself."], effect:["Bonus Leave Lv.1","When attacking, grants [12.0%] Increase ATK to yourself for [2] turn(s)."], breakSkill:["Bonus Leave Break Skill","When using an Assist Skill, grants [10.0%] Increase Chain Mastery to yourself for [2] turn(s)."] }),
  makeMemoryPiece({ id:"i-know-everything", name:"I Know Everything!", rarity:"SR", role:"Debuffer", stats:[22,23,85], passive:["ACC Lv.1","When entering battle, grants [5.0%] Increase ACC to yourself."], effect:["I Know Everything! Lv.1","When applying a debuff, grants [2.0%] Increase ACC to yourself."], breakSkill:["I Know Everything! Break Skill","When entering battle, grants [20.0%] Decrease RES to all enemies for [5] turn(s)."] })
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
          ${piece.image ? `<img src="${piece.image}" alt="${piece.name}">` : `<div class="memory-placeholder">◇</div>`}
          <span class="rarity">${piece.rarity}</span>
        </div>
        <div class="memory-card-body">
          <div class="memory-title-row">
            <div><h2>${piece.name}</h2><p>Memory Piece</p></div>
            <span class="role-chip">${piece.role}</span>
          </div>
          <div class="memory-stats-mini">
            <span>ATK <strong>${piece.normalStats.atk}</strong></span>
            <span>DEF <strong>${piece.normalStats.def}</strong></span>
            <span>HP <strong>${piece.normalStats.hp}</strong></span>
          </div>
          <div class="badges"><span>${piece.role} Only</span><span>View Details →</span></div>
        </div>
      </a>
    `).join("");
  }

  tabs.forEach(tab => tab.addEventListener("click", () => {
    tabs.forEach(x => x.classList.remove("active"));
    tab.classList.add("active");
    activeRole = tab.dataset.role;
    render();
  }));

  search.addEventListener("input", render);
  rarity.addEventListener("change", render);
  render();
}

const memoryMenuBtn = document.getElementById("menuBtn");
const memoryNav = document.getElementById("navLinks");
if (memoryMenuBtn && memoryNav) memoryMenuBtn.addEventListener("click", () => memoryNav.classList.toggle("open"));

renderMemoryPieces();
