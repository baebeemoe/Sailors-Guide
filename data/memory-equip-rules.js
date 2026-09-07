// Memory recommendation compatibility derived from the Memory's verified skill descriptions.
// Role remains the hard equipment rule. Partner-type affinity is inferred from what can actually trigger the Memory effect.
function characterCanUseAssistSkill(character) {
  return Boolean(character && character.partnerType === "Assist Partner");
}

function memoryUsageProfile(piece) {
  if (!piece || !piece.normal) return { baseAssistOnly:false, limitBreakAssistOnly:false };
  const base = String(piece.normal.effectText || "").toLowerCase();
  const limitBreak = String(piece.normal.breakText || "").toLowerCase();
  return {
    // If the normal/core Memory effect specifically requires an Assist Skill, its meaningful use is Assist Partner-focused.
    baseAssistOnly: base.includes("when using an assist skill"),
    // A Memory can still be strong at base for Battle Partners even if only its 3-copy Limit Break effect requires an Assist Skill.
    limitBreakAssistOnly: limitBreak.includes("when using an assist skill")
  };
}

function isMemoryPartnerCompatible(piece, character) {
  const profile = memoryUsageProfile(piece);
  if (profile.baseAssistOnly && !characterCanUseAssistSkill(character)) return false;
  return true;
}

function memoryPartnerNote(piece, character) {
  const profile = memoryUsageProfile(piece);
  if (profile.baseAssistOnly) return "Assist-focused: its normal Memory effect activates when using an Assist Skill.";
  if (profile.limitBreakAssistOnly && !characterCanUseAssistSkill(character)) return "Its base effects work here, but the 3-copy Limit Break effect requires an Assist Skill and does not add value to this character.";
  if (profile.limitBreakAssistOnly) return "Assist synergy: its 3-copy Limit Break effect also activates from an Assist Skill.";
  return "Compatibility is based on the Memory's role and the triggers described in its skills.";
}