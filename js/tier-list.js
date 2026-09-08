(function(){
const state={type:'battle',element:'all',role:'all'};
const tiers=['S','A','B','C'];
function units(){if(state.type==='adventurer')return gameData.adventurers;return gameData.characters.filter(x=>x.type===state.type)}
function filtered(){return units().filter(u=>(state.element==='all'||u.element===state.element)&&(state.role==='all'||u.role===state.role))}
function card(u){const rank=tierListData[state.type]?.[u.id];if(!rank)return'';return `<a class="tier-unit" href="character.html?id=${encodeURIComponent(u.id)}&type=${u.type==='adventurer'?'adventurer':'character'}"><div class="tier-unit-art">${u.image?`<img src="${u.image}" alt="${u.name}">`:`<span>${u.icon||'✦'}</span>`}</div><div class="tier-unit-copy"><div class="tier-unit-name"><strong>${u.name}</strong><span>${u.element}</span></div><small>${u.role} · ${u.rarity}</small><p>${rank.reason}</p></div></a>`}
function render(){const list=filtered();document.getElementById('tierCount').textContent=list.length;document.getElementById('tierRows').innerHTML=tiers.map(t=>{const group=list.filter(u=>tierListData[state.type]?.[u.id]?.tier===t);return `<section class="tier-row tier-${t.toLowerCase()}"><div class="tier-label"><b>${t}</b><span>${t==='S'?'Top Tier':t==='A'?'Excellent':t==='B'?'Good':'Situational'}</span></div><div class="tier-units">${group.length?group.map(card).join(''):'<div class="tier-empty">No characters in this tier with the current filters.</div>'}</div></section>`}).join('')}
document.querySelectorAll('[data-tier-type]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-tier-type]').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.type=b.dataset.tierType;document.getElementById('roleFilter').value='all';state.role='all';render()}));
document.getElementById('elementFilter').addEventListener('change',e=>{state.element=e.target.value;render()});
document.getElementById('roleFilter').addEventListener('change',e=>{state.role=e.target.value;render()});
const menu=document.getElementById('menuBtn'),nav=document.getElementById('navLinks');if(menu&&nav)menu.addEventListener('click',()=>nav.classList.toggle('open'));
render();
})();