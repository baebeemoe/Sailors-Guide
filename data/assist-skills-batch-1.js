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
  }
});