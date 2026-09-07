// Verified Star Sailors skill data transcribed from user-provided in-game screenshots.
// Trait unlock: 3★. Passive unlock: 5★. Missing entries are intentionally not fabricated.
const characterSkills = {
  swordsman: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Blazing Path",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [3] time(s) to deal [110.0%] of your final ATK as damage.",tags:["Single Target","Multi-hit","ATK"]},
    skill2:{name:"Pure Passion",level:4,type:"Active Skill",sp:5,text:"Grants Pure Passion (Increase Fire DMG by 14.0%) to all deployed allies for [4] turn(s).",tags:["Team Buff","Fire DMG"]},
    ultimate:{name:"Bloom Ember",level:1,type:"Ultimate Skill",sp:8,usageLimit:3,text:"Attacks all enemies [3] time(s) to deal [220.0%] of your final ATK as damage.",tags:["AoE","Multi-hit","ATK"]},
    break:{name:"Break",level:1,type:"Break Skill",text:"Attacks a single enemy [1] time(s) to deal [200.0%] of your final ATK as damage. Grants Break to a single enemy hit.",tags:["Single Target","Break","ATK"]}
  },
  warrior: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Unstoppable Flames",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [2] time(s) to deal [110.0%] of your final ATK as damage. If you are in the Pyro state, deals Additional DMG equal to [110.0%] of your final ATK to the target. Grants [+1] Ember to yourself.",tags:["Single Target","Additional DMG","Pyro","Ember"]},
    skill2:{name:"Ember Control",level:1,type:"Active Skill",sp:5,text:"Grants [16.5%] Increase Fire DMG to yourself for [4] turn(s) and grants [+2] Ember to yourself.",tags:["Self Buff","Fire DMG","Ember"]},
    ultimate:{name:"Eruption",level:1,type:"Ultimate Skill",sp:12,text:"Attacks all enemies [3] time(s) to deal [220.0%] of your final ATK as damage. If you are in the Pyro state, deals Additional DMG equal to [110.0%] of your final ATK to all enemies. Grants [+1] Ember to yourself.",tags:["AoE","Additional DMG","Pyro","Ember"]},
    break:{name:"Break",level:1,type:"Break Skill",text:"Attacks a single enemy [1] time(s) to deal [200.0%] of your final ATK as damage. Grants [+2] Ember to yourself. Grants Break to a single enemy hit.",tags:["Single Target","Break","Ember"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When ally turn starts, grants [+1] Ember to yourself. If you have [5] or more stacks of Ember, uses [5] stacks to grant Pyro to yourself for [2] turn(s).",tags:["Ember","Pyro"]}
  },
  cleric: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Radiant Charge",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [2] time(s) to deal [110.0%] of your final ATK as damage. If you are in the Shield state, grants Aura of Light.",tags:["Single Target","Shield","Aura of Light"]},
    skill2:{name:"Radiant Resolve",level:3,type:"Active Skill",sp:5,text:"Grants Shield equal to [65.0%] of your final DEF to a single deployed ally and yourself for [4] turn(s).",tags:["Shield","DEF","Ally Support"]},
    ultimate:{name:"Light of Hope",level:1,type:"Ultimate Skill",sp:12,text:"Grants Shield equal to [220.0%] of your final DEF to all deployed allies for [1] turn(s) and grants Aura of Light.",tags:["Team Shield","DEF","Aura of Light"]},
    break:{name:"Break",level:1,type:"Break Skill",text:"Attacks a single enemy [1] time(s) to deal [200.0%] of your final DEF as damage. Grants Break to a single enemy hit.",tags:["Single Target","Break","DEF"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When an ally uses Recovery, grants Shield of Light to yourself for [3] turn(s). If Shield of Light is fully stacked, grants [20.0%] Increase RES to all deployed allies for [1] turn(s).",tags:["Recovery Synergy","Shield of Light","Team RES"]}
  },
  enchanter: {
    basic:{name:"Basic Attack",level:4,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [70.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Inner Resonance",level:8,type:"Active Skill",sp:4,text:"Grants [18.0%] Increase ATK and [18.0%] Increase DEF to all deployed allies for [3] turn(s). Grants [+1] Mother Earth to yourself.",tags:["Team Buff","ATK","DEF","Mother Earth"]},
    skill2:{name:"Strong Will",level:5,type:"Active Skill",sp:5,text:"Grants Recovery equal to [28.0%] of your final HP to a single deployed ally. Grants [15.0%] Decrease DMG Received to the target for [2] turn(s). Grants [+1] Mother Earth to yourself.",tags:["Recovery","DMG Reduction","Mother Earth"]},
    ultimate:{name:"Protection of Earth",level:5,type:"Ultimate Skill",sp:12,text:"Grants Recovery equal to [21.0%] of your final HP to all deployed allies. Uses [Mother Earth] to activate additional effects. [3]+ Stacks: Grants [12.5%] Increase Water RES to all deployed allies for [2] turn(s).",tags:["Team Recovery","HP","Mother Earth","Water RES"]},
    break:{name:"Break",level:5,type:"Break Skill",text:"Attacks a single enemy [1] time(s) to deal [90.0%] of your final HP as damage. Grants Break to a single enemy hit.",tags:["Single Target","Break","HP"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When ally turn starts, grants [+1] Mother Earth to yourself.",tags:["Mother Earth"]}
  },
  paladin: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Radiant Charge",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [2] time(s) to deal [110.0%] of your final ATK as damage. If you are in the Shield state, grants Aura of Light.",tags:["Single Target","Shield","Aura of Light"]},
    skill2:{name:"Radiant Resolve",level:8,type:"Active Skill",sp:5,text:"Grants Shield equal to [90.0%] of your final DEF to a single deployed ally and yourself for [4] turn(s).",tags:["Shield","DEF","Ally Support"]},
    ultimate:{name:"Light of Hope",level:1,type:"Ultimate Skill",sp:12,text:"Grants Shield equal to [220.0%] of your final DEF to all deployed allies for [1] turn(s) and Aura of Light. Additionally grants [20.0%] Increase Dark RES to all deployed allies for [2] turn(s).",tags:["Team Shield","DEF","Aura of Light","Dark RES"]},
    break:{name:"Break",level:5,type:"Break Skill",text:"Attacks a single enemy [1] time(s) to deal [360.0%] of your final DEF as damage. Grants Break to a single enemy hit. Grants [15.0%] Increase Light DMG to all allies for [2] turn(s).",tags:["Break","DEF","Team Buff","Light DMG"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When an ally uses Recovery, grants Shield of Light to yourself for [3] turn(s). If Shield of Light is fully stacked, grants [20.0%] Increase RES to all deployed allies for [1] turn(s).",tags:["Recovery Synergy","Shield of Light","Team RES"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [10.0%] Increase Light DMG to all allies.",tags:["Team Buff","Light DMG"]}
  },
  sage: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Inner Resonance",level:1,type:"Active Skill",sp:4,text:"Grants [11.0%] Increase ATK and [11.0%] Increase DEF to all deployed allies for [3] turn(s). Grants [+1] Mother Earth to yourself.",tags:["Team Buff","ATK","DEF","Mother Earth"]},
    skill2:{name:"Strong Will",level:1,type:"Active Skill",sp:5,text:"Grants Recovery equal to [20.0%] of your final HP to a single deployed ally. Grants [11.0%] Decrease DMG Received to the target for [2] turn(s). Grants [+1] Mother Earth to yourself.",tags:["Recovery","DMG Reduction","Mother Earth"]},
    ultimate:{name:"Protection of Earth",level:1,type:"Ultimate Skill",sp:12,text:"Grants Recovery equal to [15.0%] of your final HP to all deployed allies. Uses [Mother Earth] to activate additional effects. [3]+ Stacks: Grants [10.5%] Increase Water RES to all deployed allies for [2] turn(s).",tags:["Team Recovery","HP","Mother Earth","Water RES"]},
    break:{name:"Break",level:1,type:"Break Skill",text:"Attacks a single enemy [1] time(s) to deal [50.0%] of your final HP as damage. Grants Break to a single enemy hit. Grants [+6] Mother Earth to yourself.",tags:["Break","HP","Mother Earth"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When ally turn starts, grants [+1] Mother Earth to yourself.",tags:["Mother Earth"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [10.0%] Increase Earth DMG to all allies.",tags:["Team Buff","Earth DMG"]}
  },
  highlander: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Unstoppable Flames",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [2] time(s) to deal [110.0%] of your final ATK as damage. If you are in the Pyro state, deals Additional DMG equal to [110.0%] of your final ATK to the target. Grants [+1] Ember to yourself.",tags:["Single Target","Additional DMG","Pyro","Ember"]},
    skill2:{name:"Ember Control",level:1,type:"Active Skill",sp:5,text:"Grants [16.5%] Increase Fire DMG to yourself for [4] turn(s) and grants [+2] Ember to yourself.",tags:["Self Buff","Fire DMG","Ember"]},
    ultimate:{name:"Eruption",level:1,type:"Ultimate Skill",sp:12,text:"Attacks all enemies [3] time(s) to deal [220.0%] of your final ATK as damage. If you are in the Pyro state, deals Additional DMG equal to [110.0%] of your final ATK to all enemies. Grants [+2] Ember to yourself.",tags:["AoE","Additional DMG","Pyro","Ember"]},
    break:{name:"Break",level:1,type:"Break Skill",text:"Attacks a single enemy [2] time(s) to deal [200.0%] of your final ATK as damage. Grants [+4] Ember to yourself. Grants Break to a single enemy hit.",tags:["Break","Multi-hit","Ember"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When ally turn starts, grants [+1] Ember to yourself. If you have [5] or more stacks of Ember, uses [5] stacks to grant Pyro to yourself for [2] turn(s).",tags:["Ember","Pyro"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [10.0%] Increase Fire DMG to all allies.",tags:["Team Buff","Fire DMG"]}
  },
  soul: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Red Blade",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [2] time(s) to deal [88.0%] of your final ATK as damage. At 50%+ HP, deals Additional DMG equal to [22.0%] final ATK [1] time; at 75%+ HP, [2] times; at 100% HP, [3] times.",tags:["Single Target","Additional DMG","HP Threshold"]},
    skill2:{name:"Blossoming Contract",level:4,type:"Active Skill",sp:5,text:"Grants [28.0%] Increase Chain Mastery to yourself for [5] turn(s).",tags:["Chain Mastery","Self Buff"]},
    ultimate:{name:"Scarlet Feast",level:1,type:"Ultimate Skill",sp:12,text:"Attacks a single enemy [6] time(s) to deal [220.0%] of your final ATK as damage. At 50%+ HP, deals Additional DMG equal to [22.0%] final ATK [2] times; at 75%+ HP, [4] times; at 100% HP, [6] times.",tags:["Single Target","Multi-hit","Additional DMG","HP Threshold"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When dealing additional damage, grants Recovery equal to [20.0%] of your final ATK.",tags:["Additional DMG","Recovery"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [8.0%] Increase Chain Mastery to yourself.",tags:["Chain Mastery"]}
  },
  heidi: {
    basic:{name:"Basic Attack",level:7,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [85.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Ecstatic Blaze",level:10,type:"Active Skill",sp:4,text:"Attacks a single enemy [1] time(s) to deal [200.0%] of your final ATK as damage. Attempts to grant [+1] Flare Up to the target [2] times with a [90.0%] chance, granting up to [0–2] stacks that last for [3] turn(s). At [3]+ Flare Up stacks, deals [200.0%] final ATK as Additional DMG and grants [+5] Fired Up to yourself.",tags:["Single Target","Debuff","Flare Up","Additional DMG","Fired Up"]},
    skill2:{name:"Euphoria in Flames",level:10,type:"Active Skill",sp:5,text:"Attacks all enemies [1] time(s) to deal [160.0%] of your final ATK as damage. Additional effects scale with Fired Up: [5]+ deals [200.0%] final ATK as Additional DMG to all enemies; [10]+ also attempts to grant [+1] Flare Up to all enemies for [3] turns with [90.0%] chance; [15]+ additionally attempts another [+1] Flare Up with [90.0%] chance.",tags:["AoE","Fired Up","Flare Up","Additional DMG","Debuff"]},
    ultimate:{name:"Crimson Gesture of Pleasure",level:10,type:"Ultimate Skill",sp:12,text:"Attacks all enemies [1] time(s) to deal [400.0%] of your final ATK as damage. Deals Additional DMG equal to [400.0%] of your final ATK to all enemies and grants [+2] Flare Up for [3] turn(s). Grants [+15] Fired Up to yourself.",tags:["AoE","Additional DMG","Flare Up","Fired Up"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When an ally applies a debuff, grants [+1] Fired Up to yourself, and if Fired Up is fully stacked, grants Rapture (Increase Crit Rate by 25.0%) to yourself for [2] turn(s).",tags:["Debuff Synergy","Fired Up","Crit Rate","Rapture"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [5.0%] Increase Crit Rate to yourself.",tags:["Crit Rate"]}
  },
  nina: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Hook Shot",level:9,type:"Active Skill",sp:4,text:"Attacks a single enemy [3] time(s) to deal [190.0%] of your final ATK as damage and grants Zugzwang. If a single enemy is in the Zugzwang state, increases the damage to [380.0%] of your final ATK.",tags:["Single Target","Multi-hit","Zugzwang"]},
    skill2:{name:"Gray Zone",level:8,type:"Active Skill",sp:5,text:"Grants [27.0%] Increase Crit Rate to yourself for [5] turn(s) and grants [+6] Foresight for [3] turn(s).",tags:["Crit Rate","Foresight","Self Buff"]},
    ultimate:{name:"Checkmate",level:9,type:"Ultimate Skill",sp:12,text:"Attacks a single enemy [1] time(s) to deal [570.0%] of your final ATK as damage. If a single enemy is in the Zugzwang state, increases the damage to [1140.0%] of your final ATK.",tags:["Single Target","Burst","Zugzwang"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When an ally lands a Critical Hit, grants Foresight to yourself for [3] turn(s). If Foresight is fully stacked due to Trait, grants [10.0%] Increase Earth RES PEN to yourself for [2] turn(s).",tags:["Critical Hit","Foresight","Earth RES PEN"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [5.0%] Increase Crit Rate to yourself.",tags:["Crit Rate"]}
  },
  ethan: {
    basic:{name:"Basic Attack",level:1,type:"Basic Attack",text:"Attacks a single enemy [1] time(s) to deal [55.0%] of your final ATK as damage.",tags:["Single Target","ATK"]},
    skill1:{name:"Light: Radiant Blade",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [1] time(s) to deal [130.0%] of your final ATK as damage. Grants Shield equal to [25.0%] of your final ATK to yourself for [2] turn(s).",tags:["Single Target","Shield","ATK"]},
    skill2:{name:"Line: Straight Path",level:1,type:"Active Skill",sp:5,text:"Grants [11.0%] Increase Dark RES to all deployed allies for [3] turn(s). Grants Shield equal to [25.0%] of your final ATK to the ally with the lowest HP ratio for [2] turn(s).",tags:["Dark RES","Shield","Team Support"]},
    ultimate:{name:"Point: Sunspot Breakthrough",level:1,type:"Ultimate Skill",sp:12,text:"Attacks a single enemy [1] time(s) to deal [330.0%] of your final ATK as damage and grants Recovery equal to [15.0%] of your final ATK to all deployed allies. Additional effects scale with Glorious Trail: [2]+ stacks removes all Shields from the target; [4]+ stacks increases damage to [430.0%] of your final ATK.",tags:["Single Target","Team Recovery","Glorious Trail","Remove Shield"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When an ally grants Shield, grants Glorious Trail to yourself.",tags:["Shield Synergy","Glorious Trail"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [10.0%] Increase ATK to yourself.",tags:["ATK"]}
  }
};
