// Verified from the user's in-game screenshots stored in the Star Sailors Google Drive.
// Supplemental Assist Partner skill data. Loaded after the existing skill datasets.
Object.assign(characterSkills, {
  ed: {
    basic:{name:"Assist Skill",level:1,type:"Assist Skill",text:"Activates with a [20.0%] chance when a deployed ally attacks. Attacks the most recent target [1] time(s) to deal [55.0%] of your final ATK as damage. Grants [+1] Remove Debuff to all deployed allies.",tags:["Assist Trigger","ATK","Remove Debuff","Team Cleanse"]},
    skill1:{name:"Journey of Flames",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [2] time(s) to deal [88.0%] of your final ATK as damage and grants [16.5%] Increase Heal Bonus to yourself for [4] turn(s).",tags:["Single Target","ATK","Heal Bonus"]},
    skill2:{name:"Flame of Purification",level:1,type:"Active Skill",sp:5,text:"Grants [2] Remove Debuff to a single deployed ally and grants Recovery equal to [80.0%] of your final ATK.",tags:["Remove Debuff","Recovery","ATK"]},
    ultimate:{name:"Purity that Burns Corruption",level:4,type:"Ultimate Skill",sp:12,text:"Grants Guiding Light (Recover HP by 21.0% of the damage dealt) to a single deployed ally for [3] turn(s) and grants [28.0%] Increase Additional DMG and [28.0%] Increase Fire DMG for [3] turn(s). Grants [2] Remove Debuff to the target.",tags:["Guiding Light","Additional DMG","Fire DMG","Remove Debuff","Buffer"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When you remove a debuff, grants Recovery equal to [32.0%] of your final ATK to all deployed allies.",tags:["Remove Debuff","Team Recovery","ATK"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [10.0%] Increase ATK to yourself.",tags:["ATK"]}
  },
  nadia: {
    basic:{name:"Assist Skill",level:1,type:"Assist Skill",text:"Activates with a [20.0%] chance when a deployed ally attacks. Attacks the most recent target [1] time(s) to deal [55.0%] of your final ATK as damage. Grants Brush Trace to the target with a [90.0%] chance. If the target has 3 or more debuffs, grants [+1] Chain Bonus.",tags:["Assist Trigger","ATK","Brush Trace","Debuff","Chain Bonus"]},
    skill1:{name:"Color Explosion!",level:1,type:"Active Skill",sp:4,text:"Attacks a single enemy [1] time(s) to deal [110.0%] of your final ATK as damage. Grants Brush Trace to the target with a [90.0%] chance. If the target has 3 or more debuffs, grants [+1] Chain Bonus.",tags:["Single Target","ATK","Brush Trace","Debuff","Chain Bonus"]},
    skill2:{name:"Pop Pop!",level:4,type:"Active Skill",sp:5,text:"Grants [21.0%] Increase ACC to yourself for [4] turn(s) and grants [+3] Pops. If Pops is fully stacked, uses all stacks to grant [+8] Chain Bonus.",tags:["ACC","Pops","Chain Bonus"]},
    ultimate:{name:"Art Wave Explosion",level:1,type:"Ultimate Skill",sp:12,text:"Attacks a single enemy [3] time(s) to deal [330.0%] of your final ATK as damage. Grants [0–3] stacks of Brush Trace to the target with a [90.0%] chance. If the target has 3 or more debuffs, grants [+3] Chain Bonus.",tags:["Single Target","ATK","Brush Trace","Debuff","Chain Bonus"]},
    trait:{name:"Trait",level:1,type:"Passive Skill",unlockStars:3,text:"When an ally applies a debuff, grants [+1] Pops to yourself.",tags:["Pops","Debuff","Chain"]},
    passive:{name:"Passive",level:1,type:"Passive Skill",unlockStars:5,text:"When entering battle, grants [8.0%] Increase Chain Mastery to yourself.",tags:["Chain Mastery","Chain"]}
  }
});