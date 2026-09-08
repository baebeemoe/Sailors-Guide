// Hard containment fix for Team Builder picker artwork.
// Uses CSS background thumbnails instead of <img> elements so large source art
// can never escape the 58x58 picker frame.
openPicker=function(slot){
  if(slot==='monster')return;
  activeSlot=slot;
  pickerTitle.textContent=slotTitle(slot);
  const choices=choicesForSlot(slot);
  pickerGrid.innerHTML=choices.length?choices.map(x=>{
    const r=rank(x),grades=topRoles(x,2).slice(0,3).map(k=>`${ROLE_NAMES[k]} ${roleTier(r[k])}`).join(' · ');
    const art=x.image?`<div class="picker-icon picker-thumb" style="--picker-art:url(&quot;${x.image}&quot;)" role="img" aria-label="${x.name}"></div>`:`<div class="picker-icon">${x.icon||'✦'}</div>`;
    return `<button class="picker-card" data-id="${x.id}">${art}<div class="picker-copy"><strong>${x.name}</strong><small>${x.type==='adventurer'?'Adventurer Class':x.partnerType}${r.verified?'':' · Provisional'}</small><div class="picker-tags"><span>${x.element}</span><span>${grades||x.role}</span></div></div></button>`;
  }).join(''):'<p>No owned characters available for this slot. Add them in Step 1.</p>';
  pickerGrid.querySelectorAll('.picker-card').forEach(card=>card.addEventListener('click',()=>{
    const selected=choices.find(x=>x.id===card.dataset.id);
    team[activeSlot]=selected;
    updateSlot(activeSlot,selected);
    if(activeSlot==='hero')adventurerSelect.value=selected.id;
    closeModal();updateAnalysis();
  }));
  backdrop.hidden=false;
  document.body.classList.add('modal-open');
};