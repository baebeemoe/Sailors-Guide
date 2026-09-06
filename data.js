const gameData = {
  adventurers: [
    { id:"swordsman", name:"Swordsman", type:"adventurer", tier:"I", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier I", image:"assets/adventurers/swordsman.jpg" },
    { id:"warrior", name:"Warrior", type:"adventurer", tier:"II", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier II", image:"assets/adventurers/warrior.jpg" },
    { id:"highlander", name:"Highlander", type:"adventurer", tier:"III", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier III", image:"assets/adventurers/highlander.jpg" },
    { id:"cleric", name:"Cleric", type:"adventurer", tier:"II", element:"Light", role:"Defender", timeTrait:"Midnight", icon:"🛡", rarity:"Tier II", image:"assets/adventurers/cleric.jpg" },
    { id:"paladin", name:"Paladin", type:"adventurer", tier:"III", element:"Light", role:"Defender", timeTrait:"Midnight", icon:"🛡", rarity:"Tier III", image:"assets/adventurers/paladin.jpg" },
    { id:"enchanter", name:"Enchanter", type:"adventurer", tier:"II", element:"Earth", role:"Supporter", timeTrait:"Daylight", icon:"✚", rarity:"Tier II", image:"assets/adventurers/enchanter.jpg" },
    { id:"sage", name:"Sage", type:"adventurer", tier:"III", element:"Earth", role:"Supporter", timeTrait:"Daylight", icon:"✚", rarity:"Tier III", image:"assets/adventurers/sage.jpg" }
  ],

  characters: [
    { id:"heidi", name:"Heidi", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"🔥", image:"assets/characters/heidi.jpg" },
    { id:"erling", name:"Erling", type:"battle", partnerType:"Battle Partner", element:"Water", role:"Defender", timeTrait:"Midnight", rarity:"SSR", icon:"💧", image:"assets/characters/erling.jpg" },
    { id:"nina", name:"Nina", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"◆", image:"assets/characters/nina.jpg" },
    { id:"soul", name:"Soul", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Attacker", timeTrait:"Midnight", rarity:"SSR", icon:"🔥", image:"assets/characters/soul.jpg" },
    { id:"nadia-sand", name:"Nadia the Sand Artist", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Midnight", rarity:"SSR", icon:"◆", image:"assets/characters/nadia-the-sand-artist.jpg" },
    { id:"ethan", name:"Ethan", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"✦", image:"assets/characters/ethan.jpg" },
    { id:"lucy-mayreel", name:"Lucy Mayreel", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Attacker", timeTrait:"Midnight", rarity:"SSR", icon:"✦", image:"assets/characters/lucy-mayreel.jpg" },
    { id:"jen", name:"Jen", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Defender", timeTrait:"Daylight", rarity:"SR", icon:"🔥", image:"assets/characters/jen.jpg" },
    { id:"kaira", name:"Kaira", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Supporter", timeTrait:"Twilight", rarity:"SR", icon:"✦", image:"assets/characters/kaira.jpg" },
    { id:"remi", name:"Remi", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Daylight", rarity:"SR", icon:"◆", image:"assets/characters/remi.jpg" },
    { id:"rak", name:"Rak", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Defender", timeTrait:"Midnight", rarity:"SR", icon:"🔥", image:"assets/characters/rak.jpg" },
    { id:"carat", name:"Carat", type:"battle", partnerType:"Battle Partner", element:"Wind", role:"Attacker", timeTrait:"Daylight", rarity:"SR", icon:"🍃", image:"assets/characters/carat.jpg" },
    { id:"iron", name:"Iron", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Midnight", rarity:"SR", icon:"◆", image:"assets/characters/iron.jpg" },

    { id:"rolling-pop", name:"Remi the Rolling Pop", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Supporter", timeTrait:"Midnight", rarity:"SSR", icon:"◆", image:"assets/characters/remi-the-rolling-pop.jpg" },
    { id:"nadia", name:"Nadia", type:"assist", partnerType:"Assist Partner", element:"Water", role:"Debuffer", timeTrait:"Midnight", rarity:"SSR", icon:"💧", image:"assets/characters/nadia.jpg" },
    { id:"ed", name:"Ed", type:"assist", partnerType:"Assist Partner", element:"Fire", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"🔥", image:"assets/characters/ed.jpg" },
    { id:"hunter-k", name:"Hunter K", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"◆", image:"assets/characters/hunter-k.jpg" },
    { id:"jerry", name:"Jerry", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Attacker", timeTrait:"Daylight", rarity:"SR", icon:"◆", image:"assets/characters/jerry.jpg" },
    { id:"nutty", name:"Nutty", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Debuffer", timeTrait:"Midnight", rarity:"SR", icon:"◆", image:"assets/characters/nutty.jpg" },
    { id:"caroline", name:"Caroline", type:"assist", partnerType:"Assist Partner", element:"Fire", role:"Debuffer", timeTrait:"Daylight", rarity:"SR", icon:"🔥", image:"assets/characters/caroline.jpg" },
    { id:"iris", name:"Iris", type:"assist", partnerType:"Assist Partner", element:"Light", role:"Attacker", timeTrait:"Midnight", rarity:"SR", icon:"✦", image:"assets/characters/iris.jpg" },
    { id:"sion", name:"Sion", type:"assist", partnerType:"Assist Partner", element:"Light", role:"Attacker", timeTrait:"Twilight", rarity:"SR", icon:"✦", image:"assets/characters/sion.jpg" },
    { id:"dora", name:"Dora", type:"assist", partnerType:"Assist Partner", element:"Water", role:"Supporter", timeTrait:"Twilight", rarity:"SR", icon:"💧", image:"assets/characters/dora.jpg" },
    { id:"simo", name:"Simo", type:"assist", partnerType:"Assist Partner", element:"Wind", role:"Debuffer", timeTrait:"Midnight", rarity:"SR", icon:"🍃", image:"assets/characters/simo.jpg" },
    { id:"mui", name:"Mui", type:"assist", partnerType:"Assist Partner", element:"Wind", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"🍃", image:"assets/characters/mui.jpg" }
  ],

  monsters: [
    { id:"primal-tan", name:"Primal Tan", type:"monster", rarity:"UR", element:"Water", role:"Monster", timeTrait:"—", icon:"◈" },
    { id:"monster-placeholder", name:"Monster Slot", type:"monster", rarity:"—", element:"—", role:"Monster", timeTrait:"—", icon:"◈" }
  ]
};

const allCharacterEntries = [...gameData.adventurers, ...gameData.characters];
