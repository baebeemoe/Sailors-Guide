// Adds the corresponding Google Drive Monster artwork to ownership cards, picker cards and the Monster formation slot.
(function(){
  function monsterByName(name){return (typeof monsterData==='undefined'?[]:monsterData).find(m=>m.name===name)}
  function imageFor(m,cls){return m&&m.image?`<img class="${cls}" src="${m.image}" alt="${m.name}" loading="lazy" referrerpolicy="no-referrer">`:''}
  function refresh(){
    document.querySelectorAll('.monster-owned-card').forEach(card=>{
      const name=card.querySelector('strong')?.textContent?.trim(),m=monsterByName(name),box=card.querySelector('.monster-owned-icon');
      if(m&&box&&!box.querySelector('img'))box.innerHTML=imageFor(m,'monster-card-image');
    });
    const pickerTitle=document.getElementById('pickerTitle');
    if(pickerTitle&&pickerTitle.textContent.includes('Monster'))document.querySelectorAll('#pickerGrid .picker-card').forEach(card=>{
      const name=card.querySelector('strong')?.textContent?.trim(),m=monsterByName(name),box=card.querySelector('.picker-icon');
      if(m&&box&&!box.querySelector('img'))box.innerHTML=imageFor(m,'monster-picker-image');
    });
    const slot=document.querySelector('[data-slot="monster"].filled');
    if(slot){const name=slot.querySelector('strong')?.textContent?.trim(),m=monsterByName(name),icon=slot.querySelector('.slot-icon');if(m&&icon&&!icon.querySelector('img'))icon.innerHTML=imageFor(m,'monster-slot-image')}
  }
  const observer=new MutationObserver(refresh);observer.observe(document.body,{childList:true,subtree:true});refresh();
})();