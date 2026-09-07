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
  ],
  "lucy-mayreel": [
    { id:"fading-memories", rating:5, label:"Best Fit", reason:"Lucy is a Light Attacker with an Active-Skill-driven rotation. Fading Memories supplies Crit Rate, Active Skill DMG and stacking Light DMG that directly reinforce her offensive cycle." },
    { id:"reason-to-live", rating:4, label:"Burst Option", reason:"Lucy has Assist-skill interactions and a special Ultimate state, making Reason to Live's Assist-triggered Light DMG and Ultimate DMG effects a strong burst alternative." },
    { id:"knight-of-light", rating:3, label:"Crit Option", reason:"The ATK passive and Ultimate-triggered Crit Rate are useful for Lucy even when the Shield-specific portion is not consistently active." }
  ],
  kaira: [
    { id:"red-hair", rating:5, label:"Best Fit", reason:"Kaira's kit repeatedly uses Recovery and scales it from ATK. Red Hair starts with an ATK increase and converts each Recovery into stacking Light DMG for the team." },
    { id:"suikawari-bring-it", rating:4, label:"Team Crit Option", reason:"Kaira's Recovery reliably triggers the team Crit DMG buff while also building toward Chain Bonus, giving her strong offensive support value." },
    { id:"reminiscence", rating:3, label:"Burst Support", reason:"Its ATK passive supports Kaira's ATK-based healing and its Ultimate trigger provides team Crit DMG for burst windows." }
  ],
  "nadia-sand": [
    { id:"summer-nights-full-dream", rating:5, label:"Best Fit", reason:"Nadia is an HP-scaling Defender who applies Taunt. This Memory adds MAX HP, self-Recovery every ally turn and a direct interaction with taunted targets." },
    { id:"bubble", rating:4, label:"Debuff Utility", reason:"Cocktail Temptation and Taunt make Nadia a frequent debuff applier, allowing Bubble to build RES and potentially restore SP to deployed allies while also increasing MAX HP." },
    { id:"dad-role", rating:3, label:"Sustain Option", reason:"MAX HP supports Nadia's HP scaling and the recurring self-Recovery helps her remain healthy while functioning as a tank." }
  ],
  remi: [
    { id:"guardian-of-light", rating:5, label:"Best Fit", reason:"Remi frequently grants Shields through Moley! Hold On! and Vein Jackpot, directly triggering Guardian of Light's Shield utility and Chain Bonus condition." },
    { id:"legendary-ore", rating:4, label:"DEF Scaling", reason:"Remi's damage, Shield strength and Sturdy mechanic all value DEF. Legendary Ore adds DEF and further increases it after her Ultimate." },
    { id:"the-159th-princess", rating:4, label:"Tank Option", reason:"Taking hits raises DEF, which strengthens Remi's DEF-scaled attacks and Shields while she occupies a defensive role." }
  ],
  rak: [
    { id:"dad-role", rating:5, label:"Best Fit", reason:"Rak scales attacks from HP and intentionally takes hits through Taunt. MAX HP, self-Recovery and Heal Bonus Received all reinforce his Fiery Heart tank loop." },
    { id:"summer-nights-full-dream", rating:4, label:"Taunt Sustain", reason:"Rak actively Taunts enemies and benefits heavily from MAX HP and repeated self-Recovery, making this a strong sustain-oriented Defender option." },
    { id:"bubble", rating:3, label:"HP Utility", reason:"Bubble's MAX HP directly improves Rak's HP-scaled damage and Fiery Heart durability while adding team SP utility when he applies Taunt." }
  ],
  carat: [
    { id:"carat-the-strongest-wind", rating:5, label:"Best Fit", reason:"Carat deals Additional DMG while Chill Diva is active, directly activating this Memory's ATK increase and matching her core damage loop." },
    { id:"silver-ravens-leader", rating:4, label:"Crit Burst", reason:"Carat already gains Crit Rate from Chill Diva and her Passive. Extra Crit DMG plus the Active-Skill ATK buff gives her a strong general burst package." },
    { id:"bonus-leave", rating:3, label:"Accessible", reason:"A reliable ATK increase after attacking improves both Carat's normal damage and the Additional DMG portions of her kit." }
  ],
  iron: [
    { id:"summer-nights-full-dream", rating:5, label:"Best Fit", reason:"Iron is an HP-scaling Taunt Defender. MAX HP, automatic Recovery and the direct taunted-target interaction closely match his tanking and sustain mechanics." },
    { id:"dad-role", rating:4, label:"Sustain Option", reason:"MAX HP strengthens Iron's HP-scaled attacks while repeated self-Recovery and Heal Bonus Received improve his durability." },
    { id:"bubble", rating:3, label:"HP Utility", reason:"The MAX HP passive supports Iron's HP scaling, while his Taunt application can activate Bubble's debuff-triggered RES and team SP utility." }
  ]
};
