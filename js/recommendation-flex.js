// Flexible recommendation presentation for Beemoe's Guide.
// Keeps the game's Memory role restriction, but treats Chain/trigger synergy as ranking context
// rather than hiding otherwise useful curated options.
(function(){
  if(typeof character==='undefined') return;

  // The curated data already contains at least three role-legal choices per covered character.
  // Re-render without the old Chainer-only display gate so players can see situational/flexible picks.
  if(typeof isCharacterChainer==='function' && typeof renderMemoryRecommendations==='function'){
    isCharacterChainer=()=>true;
    const section=document.getElementById('memory');
    if(section){
      section.innerHTML=`<p class="eyebrow">MEMORY PIECES</p><h2>Recommended Memory Pieces</h2>${renderMemoryRecommendations()}`;
      const note=section.querySelector('.memory-method-note');
      if(note) note.innerHTML='<strong>Recommendation approach:</strong> At least three role-legal options are shown when verified data is available. Picks are ranked by total kit synergy — scaling, element, Crit, Chain, SP, Recovery, Shield, debuff and rotation value. A Memory does not need to be the single perfect BiS choice to be useful; situational and accessible alternatives are intentionally included.';
    }
  }

  function chooseFlexibleGear(rec){
    if(typeof gearSets==='undefined') return null;
    const used=new Set([rec.best,rec.alt]);
    const preferred=[];
    const scaling=((typeof characterOverviews!=='undefined'&&characterOverviews[character.id]?.scaling)||'').toLowerCase();
    if(character.element==='Fire') preferred.push('radiant-sun');
    if(character.element==='Light') preferred.push('eternal-grove');
    if(character.element==='Earth') preferred.push('still-abyss');
    if(/hp/.test(scaling)||character.role==='Defender') preferred.push('noble-soul');
    if(/def/.test(scaling)||character.role==='Defender') preferred.push('resolute-cause');
    if(/heal|recovery/.test(scaling)||character.role==='Supporter') preferred.push('purifying-seas');
    if(/atk/.test(scaling)||character.role==='Attacker'||character.role==='Debuffer') preferred.push('blessing-primal-tan','solemn-resolve');
    preferred.push('blessing-primal-tan','solemn-resolve','noble-soul','purifying-seas','resolute-cause','still-abyss','eternal-grove','radiant-sun');
    const id=preferred.find(x=>!used.has(x)&&gearSets.some(s=>s.id===x));
    return id?gearSets.find(s=>s.id===id):null;
  }

  const rec=typeof gearRecommendations!=='undefined'?gearRecommendations[character.id]:null;
  const grid=document.querySelector('#gear .gear-rec-grid');
  if(rec&&grid&&grid.children.length<3){
    const flex=chooseFlexibleGear(rec);
    if(flex&&typeof renderGearSet==='function') grid.insertAdjacentHTML('beforeend',renderGearSet(flex,'FLEXIBLE / THIRD OPTION'));
    const why=document.querySelector('#gear .gear-why');
    if(why) why.insertAdjacentHTML('afterend','<div class="gear-rule-note"><strong>Flexible gearing:</strong> The first set is the strongest general fit, but the alternatives are valid depending on available pieces, substats, team needs, and the part of the kit you want to emphasize. Strong substats can make an alternative set preferable while progressing.</div>');
  }
})();
