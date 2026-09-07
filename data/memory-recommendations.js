// Curated Memory Piece recommendations based on verified character kits and the current Memory Piece database.
// These are synergy recommendations, not claims of mathematically proven global BiS.
const memoryRecommendations = {
  swordsman: [
    { id:"bonus-leave", rating:4, label:"Best Fit", reason:"Reliable ATK scaling after attacking complements Swordsman's straightforward ATK-based Basic, Active and Ultimate damage." },
    { id:"blood-temptation", rating:4, label:"Chain Option", reason:"Adds Chain Mastery while Swordsman stays above 75% HP, improving damage gained from Element Chains." },
    { id:"silver-ravens-leader", rating:3, label:"Burst Option", reason:"Active Skill use grants a strong temporary ATK increase, useful before Swordsman's damaging rotation." }
  ],
  warrior: [
    { id:"carat-the-strongest-wind", rating:5, label:"Best Fit", reason:"Warrior repeatedly creates Additional DMG while in Pyro, directly triggering this Memory's 20% ATK increase." },
    { id:"bonus-leave", rating:4, label:"Alternative", reason:"Warrior attacks frequently and benefits directly from the recurring ATK increase." },
    { id:"blood-temptation", rating:3, label:"Chain Option", reason:"Chain Mastery is valuable for Warrior's damage output when elemental chains are being maintained." }
  ],
  cleric: [
    { id:"guardian-of-light", rating:5, label:"Best Fit", reason:"Cleric is built around DEF-scaling Shields. Granting Shield activates team protection, and Shield state can generate Chain Bonus." },
    { id:"legendary-ore", rating:4, label:"DEF Option", reason:"DEF directly improves Cleric's Shield values and Break damage, while the Memory supplies additional DEF and mitigation." },
    { id:"the-159th-princess", rating:3, label:"Accessible", reason:"An SR Defender option that raises DEF after taking hits, reinforcing Cleric's DEF-based defensive scaling." }
  ],
  enchanter: [
    { id:"guardian-of-the-earth", rating:5, label:"Best Fit", reason:"Enchanter repeatedly uses Active Skills while supporting the party, gaining personal damage reduction and extra SP utility from Ultimate use." },
    { id:"eat-heart", rating:4, label:"Healing Option", reason:"Active Skill use adds team Recovery and its Break effect improves Heal Bonus, matching Enchanter's Recovery-focused support kit." },
    { id:"kaira", rating:3, label:"Accessible", reason:"Enchanter uses Recovery often, allowing this SR Memory to repeatedly activate its Recovery-based effects." }
  ],
  paladin: [
    { id:"guardian-of-light", rating:5, label:"Best Fit", reason:"Paladin repeatedly grants DEF-based Shields, directly activating Guardian of Light's protection and Chain Bonus mechanics." },
    { id:"legendary-ore", rating:4, label:"DEF Option", reason:"Paladin scales important actions from DEF, so extra DEF improves both Shield strength and Break damage." },
    { id:"battle-preparation", rating:3, label:"Offensive Option", reason:"Paladin can maintain Shield state consistently, making the conditional ATK increase easier to activate than for most characters." }
  ],
  sage: [
    { id:"guardian-of-the-earth", rating:5, label:"Best Fit", reason:"Sage is an HP-scaling Recovery support who uses Active Skills frequently; MAX HP and Active Skill mitigation fit that pattern well." },
    { id:"eat-heart", rating:4, label:"Healing Option", reason:"Adds party Recovery whenever Sage uses an Active Skill and can improve Heal Bonus around Ultimate usage." },
    { id:"silent-whisper", rating:4, label:"Sustain Option", reason:"MAX HP supports Sage's HP scaling while automatic Recovery helps stabilize the lowest-HP ally." }
  ],
  highlander: [
    { id:"carat-the-strongest-wind", rating:5, label:"Best Fit", reason:"Highlander's Pyro rotation deals Additional DMG, directly enabling this Memory's 20% ATK increase." },
    { id:"bonus-leave", rating:4, label:"Alternative", reason:"A simple, reliable ATK increase after attacking that works throughout Highlander's damage rotation." },
    { id:"blood-temptation", rating:3, label:"Chain Option", reason:"Provides Chain Mastery while healthy, strengthening Highlander's damage contribution during advantageous elemental chains." }
  ],
  soul: [
    { id:"blood-temptation", rating:5, label:"Best Fit", reason:"Soul already invests heavily in Chain Mastery, so additional Chain Mastery amplifies the same Element Chain damage plan." },
    { id:"bonus-leave", rating:4, label:"Alternative", reason:"Soul's damage and self-Recovery scale from ATK, making a recurring ATK increase useful both offensively and defensively." },
    { id:"lifesaver", rating:3, label:"Chain Option", reason:"Provides an immediate Chain Mastery boost at battle start, supporting Soul's chain-focused setup." }
  ],
  heidi: [
    { id:"heidis-world", rating:5, label:"Best Fit", reason:"A direct match for Heidi: applying debuffs builds Additional DMG, Fire RES PEN and Fire DMG, all central to her Fired Up / Flare Up damage engine." },
    { id:"contract-with-the-devil", rating:4, label:"Alternative", reason:"Heidi applies debuffs repeatedly, allowing her to trigger the 20% ATK increase consistently." },
    { id:"carat-the-strongest-wind", rating:4, label:"Additional DMG", reason:"Heidi deals substantial Additional DMG, which activates this Memory's ATK increase and reinforces her burst cycle." }
  ],
  nina: [
    { id:"traitor", rating:5, label:"Best Fit", reason:"Nina's Earth burst kit already builds Crit Rate and Earth RES PEN. Traitor adds Crit Rate and boosts Earth DMG around her extremely powerful Ultimate." },
    { id:"silver-ravens-leader", rating:4, label:"Alternative", reason:"Crit DMG and Active-Skill ATK scaling complement Nina's high Crit Rate and large single-target multipliers." },
    { id:"bonus-leave", rating:3, label:"Accessible", reason:"A dependable SR ATK option for Nina when the stronger burst-oriented Memories are unavailable." }
  ],
  ethan: [
    { id:"battle-preparation", rating:5, label:"Best Fit", reason:"Ethan creates Shields with his own kit, so he can naturally maintain Shield state and repeatedly activate the Memory's 30% ATK increase." },
    { id:"knight-of-light", rating:4, label:"Burst Option", reason:"Ethan's Shield access pairs with the Memory's Shield-related condition while its ATK and Ultimate Crit effects support his ATK-scaling burst." },
    { id:"fading-memories", rating:4, label:"Light Option", reason:"Ethan uses damaging Active Skills and is Light-aligned, allowing Active Skill DMG and stacking Light DMG to reinforce his offense." }
  ]
};
