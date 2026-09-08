// Kit-based role scores for Team Builder and Character Team Recommendations.
// Scale: S=5, A=4, B=3, C=2, D=1, none=0.
// Current roster rankings use verified skill data.
const teamRoleRankings={
 swordsman:{dps:4,chainer:1,support:3,defender:0,debuffer:0,verified:true,note:"Direct Fire DPS with a team Fire DMG buff."},
 warrior:{dps:5,chainer:3,support:1,defender:0,debuffer:0,verified:true,note:"Pyro/Additional DMG carry; multi-hit kit benefits Chain play."},
 highlander:{dps:5,chainer:3,support:3,defender:0,debuffer:0,verified:true,note:"Strong Pyro DPS; 5★ team Fire DMG support."},
 cleric:{dps:1,chainer:0,support:4,defender:5,debuffer:0,verified:true,note:"DEF-scaling Shield specialist with team protection."},
 paladin:{dps:2,chainer:0,support:4,defender:5,debuffer:0,verified:true,note:"Elite Shield Defender with Light/Dark RES team utility."},
 enchanter:{dps:1,chainer:0,support:5,defender:3,debuffer:0,verified:true,note:"ATK/DEF buffs, Recovery and damage reduction."},
 sage:{dps:1,chainer:0,support:5,defender:3,debuffer:0,verified:true,note:"Recovery, ATK/DEF buffs, mitigation and Earth support."},
 heidi:{dps:5,chainer:3,support:1,defender:0,debuffer:4,verified:true,note:"High Fire damage with stacking Fire RES reduction."},
 soul:{dps:5,chainer:5,support:1,defender:1,debuffer:0,verified:true,note:"Chain Mastery specialist with high-HP Additional DMG."},
 nina:{dps:5,chainer:3,support:1,defender:0,debuffer:2,verified:true,note:"Top single-target burst with Crit and Earth RES PEN utility."},
 ethan:{dps:4,chainer:2,support:4,defender:3,debuffer:0,verified:true,note:"Hybrid Light attacker providing Shields, Recovery and utility."},
 "lucy-mayreel":{dps:5,chainer:3,support:1,defender:1,debuffer:2,verified:true,note:"High Light burst with Crit, RES PEN and shield removal."},
 erling:{dps:2,chainer:1,support:3,defender:5,debuffer:5,verified:true,note:"Pretty Bubble protection plus powerful stacking RES shred."},
 jen:{dps:2,chainer:1,support:4,defender:5,debuffer:2,verified:true,note:"Damage-sharing tank with DEF scaling, buff removal and team Recovery."},
 kaira:{dps:2,chainer:3,support:5,defender:1,debuffer:0,verified:true,note:"Team ATK stacking, burst Recovery and sustained healing."},
 "nadia-sand":{dps:2,chainer:1,support:4,defender:5,debuffer:4,verified:true,note:"Taunt tank with Crit RES debuff and strong single-carry DMG buff."},
 remi:{dps:1,chainer:1,support:4,defender:5,debuffer:3,verified:true,note:"High-DEF Shield tank with Crit Rate RES reduction."},
 rak:{dps:2,chainer:5,support:2,defender:5,debuffer:2,verified:true,note:"Taunt tank that generates SP and Chain Bonus when hit."},
 carat:{dps:5,chainer:3,support:1,defender:0,debuffer:0,verified:true,note:"Crit/Ultimate burst attacker with Additional DMG synergy."},
 iron:{dps:2,chainer:1,support:3,defender:5,debuffer:4,verified:true,note:"HP Taunt tank with strong sustain and Increase DMG Received debuff."},
 ed:{dps:1,chainer:0,support:5,defender:2,debuffer:0,verified:true,note:"ATK-scaling healer/cleanser with Fire DMG and Additional DMG support."},
 nadia:{dps:2,chainer:5,support:2,defender:0,debuffer:5,verified:true,note:"Brush Trace debuffer with strong conditional Chain Bonus and Chain Mastery."},
 caroline:{dps:3,chainer:5,support:2,defender:0,debuffer:5,verified:true,note:"Buff-strip specialist that converts successful removal into Chain Bonus and also lowers enemy damage."},
 nutty:{dps:2,chainer:5,support:3,defender:0,debuffer:5,verified:true,note:"Flexible Curiosity states trade SP generation for Chain Bonus while spreading The Questionator."},
 iris:{dps:5,chainer:1,support:1,defender:0,debuffer:0,verified:true,note:"Light Assist burst attacker with Brooch resource, self Crit and damage amplification."},
 jerry:{dps:5,chainer:1,support:1,defender:0,debuffer:0,verified:true,note:"Earth AoE attacker whose Mimic stacks add repeated Additional DMG; thrives beside Crit-heavy allies."},
 "hunter-k":{dps:2,chainer:1,support:5,defender:2,debuffer:0,verified:true,note:"Dedicated ATK/Crit buffer with team Crit Rate RES protection and strong SP access."},
 sion:{dps:4,chainer:5,support:2,defender:0,debuffer:0,verified:true,note:"Flash Hummingbird single-target attacker with exceptional Chain Bonus and Chain Mastery."},
 dora:{dps:0,chainer:0,support:5,defender:3,debuffer:0,verified:true,note:"HP-scaling healer with team ATK buff, reactive Recovery and stacking Heal Bonus."},
 simo:{dps:2,chainer:0,support:2,defender:0,debuffer:5,verified:true,note:"Dedicated ACC-based debuffer stacking DEF reduction through Tingle and applying RES reduction."},
 mui:{dps:0,chainer:0,support:5,defender:4,debuffer:0,verified:true,note:"HP-scaling team healer with Gaze-focused protection, cleansing and Ultimate DMG support."},
 "rolling-pop":{dps:3,chainer:2,support:5,defender:2,debuffer:0,verified:true,note:"Crit-oriented ATK buffer with Ultimate DMG support, team Crit buffs and ATK-scaled Recovery."}
};
function roleScore(unit,role){return teamRoleRankings[unit.id]?.[role]||0}function roleTier(score){return score>=5?'S':score===4?'A':score===3?'B':score===2?'C':score===1?'D':'—'}function roleRank(unit){return teamRoleRankings[unit.id]||{dps:0,chainer:0,support:0,defender:0,debuffer:0,verified:false,note:'Ranking pending.'}}