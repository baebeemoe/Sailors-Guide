// Render verified special skills and mechanic definitions that sit outside the standard skill slots.
(function(){
  const params=new URLSearchParams(location.search);
  const id=params.get("id");
  const data=typeof characterSkills!=="undefined"?characterSkills[id]:null;
  if(!data)return;
  const grid=document.querySelector("#skills .skills-grid");
  if(!grid)return;
  const extras=[data.assistAwakened,data.assistLazy,data.specialUltimate].filter(Boolean);
  extras.forEach(skill=>{
    const tags=(skill.tags||[]).map(tag=>`<span>${tag}</span>`).join("");
    const sp=skill.sp?`<span class="skill-sp">SP ${skill.sp}</span>`:"";
    grid.insertAdjacentHTML("beforeend",`<article class="skill-card"><div class="skill-card-head"><div><p class="skill-kind">${skill.type}</p><h3>${skill.name}</h3></div><div class="skill-meta"><span>Lv.${skill.level}</span>${sp}</div></div><p class="skill-description">${skill.text}</p>${tags?`<div class="skill-tags">${tags}</div>`:""}</article>`);
  });
  const mechanics=typeof characterMechanics!=="undefined"?(characterMechanics[id]||[]):[];
  mechanics.forEach(mechanic=>{
    grid.insertAdjacentHTML("beforeend",`<article class="skill-card mechanic-card"><div class="skill-card-head"><div><p class="skill-kind">Mechanic</p><h3>${mechanic.name}</h3></div></div><p class="skill-description">${mechanic.text}</p></article>`);
  });
})();
