// Curated Memory Piece recommendations based on verified character kits and the current Memory Piece database.
// HARD RULE: a character can only equip a Memory Piece with the same role.
// Rankings are synergy recommendations, not claims of mathematically proven global BiS.
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
    { id:"guardian-of-light", rating:5, label:"Best Fit", reason:"Cleric is built around DEF-scaling Shields. Guardian of Light directly rewards granting and maintaining Shields." },
    { id:"legendary-ore", rating:4, label:"DEF Option", reason:"DEF directly improves Cleric's Shield values and Break damage, while this Defender Memory supplies additional defensive value." },
    { id:"the-159th-princess", rating:3, label:"Accessible", reason:"A Defender option that raises DEF after taking hits, reinforcing Cleric's DEF-based defensive scaling." }
  ],
  enchanter: [
    { id:"guardian-of-the-earth", rating:5, label:"Best Fit", reason:"Enchanter repeatedly uses Active Skills while supporting the party, matching this Supporter Memory's defensive and SP-oriented utility." },
    { id:"eat-heart", rating:4, label:"Healing Option", reason:"Active Skill use adds team Recovery and its Break effect improves Heal Bonus, matching Enchanter's Recovery-focused support kit." },
    { id:"kaira", rating:3, label:"Accessible", reason:"Enchanter uses Recovery often, allowing this Supporter Memory to repeatedly activate its Recovery-based effects." }
  ],
  paladin: [
    { id:"guardian-of-light", rating:5, label:"Best Fit", reason:"Paladin repeatedly grants DEF-based Shields, directly activating Guardian of Light's defensive and Chain Bonus mechanics." },
    { id:"legendary-ore", rating:4, label:"DEF Option", reason:"Paladin scales important actions from DEF, so a Defender Memory that reinforces DEF improves both Shield strength and Break damage." },
    { id:"the-159th-princess", rating:3, label:"Accessible", reason:"This Defender Memory can increase DEF after Paladin takes hits, further supporting Paladin's DEF-scaling kit." }
  ],
  sage: [
    { id:"guardian-of-the-earth", rating:5, label:"Best Fit", reason:"Sage is an HP-scaling Recovery support who uses Active Skills frequently; this Supporter Memory fits that sustained support pattern." },
    { id:"eat-heart", rating:4, label:"Healing Option", reason:"Adds party Recovery whenever Sage uses an Active Skill and can improve Heal Bonus around Ultimate usage." },
    { id:"silent-whisper", rating:4, label:"Sustain Option", reason:"MAX HP supports Sage's HP scaling while automatic Recovery helps stabilize the lowest-HP ally." }
  ],
  highlander: [
    { id:"carat-the-strongest-wind", rating:5, label:"Best Fit", reason:"Highlander's Pyro rotation deals Additional DMG, directly enabling this Attacker Memory's ATK increase." },
    { id:"bonus-leave", rating:4, label:"Alternative", reason:"A simple, reliable ATK increase after attacking that works throughout Highlander's damage rotation." },
    { id:"blood-temptation", rating:3, label:"Chain Option", reason:"Provides Chain Mastery while healthy, strengthening Highlander's damage contribution during advantageous elemental chains." }
  ],
  soul: [
    { id:"blood-temptation", rating:5, label:"Best Fit", reason:"Soul already invests heavily in Chain Mastery, so this Attacker Memory amplifies the same Element Chain damage plan." },
    { id:"bonus-leave", rating:4, label:"Alternative", reason:"Soul's damage and self-Recovery scale from ATK, making a recurring ATK increase useful both offensively and defensively." },
    { id:"lifesaver", rating:3, label:"Chain Option", reason:"Provides an immediate Chain Mastery boost at battle start, supporting Soul's chain-focused setup." }
  ],
  heidi: [
    { id:"heidis-world", rating:5, label:"Best Fit", reason:"A direct Attacker match for Heidi: her kit builds Additional DMG, Fire RES PEN and Fire DMG around Fired Up and Flare Up." },
    { id:"carat-the-strongest-wind", rating:4, label:"Additional DMG", reason:"Heidi deals substantial Additional DMG, which activates this Attacker Memory's ATK increase and reinforces her burst cycle." },
    { id:"bonus-leave", rating:3, label:"Accessible", reason:"A role-valid general ATK option that benefits Heidi's ATK-scaled damage when stronger specialized Attacker Memories are unavailable." }
  ],
  nina: [
    { id:"traitor", rating:5, label:"Best Fit", reason:"Nina's Earth burst kit already builds Crit Rate and Earth RES PEN. This Attacker Memory adds Crit Rate and boosts Earth DMG around her powerful Ultimate." },
    { id:"silver-ravens-leader", rating:4, label:"Alternative", reason:"Crit DMG and Active-Skill ATK scaling complement Nina's high Crit Rate and large single-target multipliers." },
    { id:"bonus-leave", rating:3, label:"Accessible", reason:"A dependable Attacker ATK option for Nina when stronger burst-oriented Memories are unavailable." }
  ],
  ethan: [
    { id:"knight-of-light", rating:5, label:"Best Fit", reason:"Ethan is an Attacker who creates Shields with his own kit. Knight of Light is role-valid and combines offensive scaling with Shield-related synergy." },
    { id:"fading-memories", rating:4, label:"Light Option", reason:"Ethan uses damaging Active Skills and is Light-aligned, allowing this Attacker Memory's Active Skill and Light DMG effects to reinforce his offense." },
    { id:"bonus-leave", rating:3, label:"Accessible", reason:"A reliable Attacker Memory that provides general ATK scaling for Ethan's ATK-based damage." }
  ]
};
