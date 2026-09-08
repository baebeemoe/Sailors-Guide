const gameData = {
  adventurers: [
    { id:"swordsman", name:"Swordsman", type:"adventurer", tier:"I", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier I", image:"assets/adventurers/swordsman.png" },
    { id:"warrior", name:"Warrior", type:"adventurer", tier:"II", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier II", image:"assets/adventurers/warrior.png" },
    { id:"highlander", name:"Highlander", type:"adventurer", tier:"III", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier III", image:"assets/adventurers/highlander.png" },
    { id:"cleric", name:"Cleric", type:"adventurer", tier:"II", element:"Light", role:"Defender", timeTrait:"Midnight", icon:"🛡", rarity:"Tier II", image:"assets/adventurers/cleric.png" },
    { id:"paladin", name:"Paladin", type:"adventurer", tier:"III", element:"Light", role:"Defender", timeTrait:"Midnight", icon:"🛡", rarity:"Tier III", image:"assets/adventurers/paladin.png" },
    { id:"enchanter", name:"Enchanter", type:"adventurer", tier:"II", element:"Earth", role:"Supporter", timeTrait:"Daylight", icon:"✚", rarity:"Tier II", image:"assets/adventurers/enchanter.png" },
    { id:"sage", name:"Sage", type:"adventurer", tier:"III", element:"Earth", role:"Supporter", timeTrait:"Daylight", icon:"✚", rarity:"Tier III", image:"assets/adventurers/sage.png" }
  ],

  characters: [
    { id:"heidi", name:"Heidi", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"🔥", image:"assets/characters/heidi.png" },
    { id:"erling", name:"Erling", type:"battle", partnerType:"Battle Partner", element:"Water", role:"Defender", timeTrait:"Midnight", rarity:"SSR", icon:"💧", image:"assets/characters/erling.png" },
    { id:"nina", name:"Nina", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"◆", image:"assets/characters/nina.png" },
    { id:"soul", name:"Soul", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Attacker", timeTrait:"Midnight", rarity:"SR", icon:"🔥", image:"assets/characters/soul.png" },
    { id:"nadia-sand", name:"Nadia the Sand Artist", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Midnight", rarity:"SSR", icon:"◆", image:"assets/characters/nadia-the-sand-artist.png" },
    { id:"ethan", name:"Ethan", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"✦", image:"assets/characters/ethan.png" },
    { id:"lucy-mayreel", name:"Lucy Mayreel", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Attacker", timeTrait:"Midnight", rarity:"SSR", icon:"✦", image:"assets/characters/lucy-mayreel.png" },
    { id:"jen", name:"Jen", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Defender", timeTrait:"Daylight", rarity:"SSR", icon:"🔥", image:"assets/characters/jen.png" },
    { id:"kaira", name:"Kaira", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Supporter", timeTrait:"Twilight", rarity:"SSR", icon:"✦", image:"assets/characters/kaira.png" },
    { id:"remi", name:"Remi", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Daylight", rarity:"SR", icon:"◆", image:"assets/characters/remi.png" },
    { id:"rak", name:"Rak", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Defender", timeTrait:"Midnight", rarity:"SR", icon:"🔥", image:"assets/characters/rak.png" },
    { id:"carat", name:"Carat", type:"battle", partnerType:"Battle Partner", element:"Wind", role:"Attacker", timeTrait:"Daylight", rarity:"SR", icon:"🍃", image:"assets/characters/carat.png" },
    { id:"iron", name:"Iron", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Midnight", rarity:"SR", icon:"◆", image:"assets/characters/iron.png" },

    { id:"rolling-pop", name:"Remi the Rolling Pop", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Supporter", timeTrait:"Midnight", rarity:"SSR", icon:"◆", image:"assets/characters/remi-the-rolling-pop.png" },
    { id:"nadia", name:"Nadia", type:"assist", partnerType:"Assist Partner", element:"Water", role:"Debuffer", timeTrait:"Midnight", rarity:"SR", icon:"💧", image:"assets/characters/nadia.png" },
    { id:"ed", name:"Ed", type:"assist", partnerType:"Assist Partner", element:"Fire", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"🔥", image:"assets/characters/ed.png" },
    { id:"hunter-k", name:"Hunter K", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"◆", image:"assets/characters/hunter-k.png" },
    { id:"jerry", name:"Jerry", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Attacker", timeTrait:"Daylight", rarity:"SR", icon:"◆", image:"assets/characters/jerry.png" },
    { id:"nutty", name:"Nutty", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Debuffer", timeTrait:"Midnight", rarity:"SR", icon:"◆", image:"assets/characters/nutty.png" },
    { id:"caroline", name:"Caroline", type:"assist", partnerType:"Assist Partner", element:"Fire", role:"Debuffer", timeTrait:"Daylight", rarity:"SR", icon:"🔥", image:"assets/characters/caroline.png" },
    { id:"iris", name:"Iris", type:"assist", partnerType:"Assist Partner", element:"Light", role:"Attacker", timeTrait:"Midnight", rarity:"SSR", icon:"✦", image:"assets/characters/iris.png" },
    { id:"sion", name:"Sion", type:"assist", partnerType:"Assist Partner", element:"Light", role:"Attacker", timeTrait:"Twilight", rarity:"SR", icon:"✦", image:"assets/characters/sion.png" },
    { id:"dora", name:"Dora", type:"assist", partnerType:"Assist Partner", element:"Water", role:"Supporter", timeTrait:"Twilight", rarity:"SR", icon:"💧", image:"assets/characters/dora.png" },
    { id:"simo", name:"Simo", type:"assist", partnerType:"Assist Partner", element:"Wind", role:"Debuffer", timeTrait:"Midnight", rarity:"SR", icon:"🍃", image:"assets/characters/simo.png" },
    { id:"mui", name:"Mui", type:"assist", partnerType:"Assist Partner", element:"Wind", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"🍃", image:"assets/characters/mui.png" }
  ],

  monsters: [
    { id:"primal-tan", name:"Primal Tan", type:"monster", rarity:"UR", element:"Water", role:"Monster", timeTrait:"—", icon:"◈" },
    { id:"monster-placeholder", name:"Monster Slot", type:"monster", rarity:"—", element:"—", role:"Monster", timeTrait:"—", icon:"◈" }
  ]
};

const allCharacterEntries = [...gameData.adventurers, ...gameData.characters];
