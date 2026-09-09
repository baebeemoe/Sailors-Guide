// Extra recommendation guard: a role-compatible Memory must also have a trigger the character can actually use.
(function(){
  const baseCompatibility = typeof window.isMemoryPartnerCompatible === 'function' ? window.isMemoryPartnerCompatible : null;
  function kitText(character){
    const kit = typeof characterSkills !== 'undefined' ? characterSkills[character.id] : null;
    if(!kit) return '';
    return Object.values(kit).filter(v=>v&&typeof v==='object').map(v=>`${v.name||''} ${v.type||''} ${v.text||''} ${(v.tags||[]).join(' ')}`).join(' ').toLowerCase();
  }
  function memoryText(piece){
    if(!piece||!piece.normal) return '';
    return [piece.normal.passiveName,piece.normal.passiveText,piece.normal.effectName,piece.normal.effectText,piece.normal.breakName,piece.normal.breakText].filter(Boolean).join(' ').toLowerCase();
  }
  function has(kit,pattern){return pattern.test(kit)}
  function triggerFits(piece,character){
    const mem=memoryText(piece),kit=kitText(character);
    if(!mem||!kit) return true;
    // Only reject explicit action/mechanic triggers. Generic triggers such as entering battle,
    // ally turn starts, taking action, attacking, HP thresholds, etc. remain universally usable.
    if(/when using recovery|when granting recovery|when recovery is granted/.test(mem) && !has(kit,/recovery/)) return false;
    if(/when granting shield|when shield is granted/.test(mem) && !has(kit,/shield/)) return false;
    if(/when applying a debuff/.test(mem) && !has(kit,/debuff|decrease|taunt|flared? up|brush trace|questionator|tingle/)) return false;
    if(/when removing a debuff/.test(mem) && !has(kit,/remove debuff|cleanse/)) return false;
    if(/when removing a buff/.test(mem) && !has(kit,/remove buff|dispel/)) return false;
    if(/when using an assist skill/.test(mem) && character.partnerType!=='Assist Partner') return false;
    return true;
  }
  window.memorySkillTriggerCompatible = triggerFits;
  window.isMemoryPartnerCompatible = function(piece,character){
    if(baseCompatibility && !baseCompatibility(piece,character)) return false;
    return triggerFits(piece,character);
  };
})();