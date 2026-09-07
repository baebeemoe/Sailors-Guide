// Memory equipment compatibility metadata.
// IMPORTANT: Only add a Memory ID here after its partner-type restriction is verified.
// Values: "assist", "battle", "adventurer", or "all".
// Unlisted Memories remain "unverified" and are not assumed to be universally compatible.
const memoryEquipRules = {
};

function memoryEquipType(piece) {
  if (!piece) return "unverified";
  return memoryEquipRules[piece.id] || "unverified";
}

function characterEquipType(character) {
  if (!character) return "unknown";
  if (character.type === "adventurer") return "adventurer";
  if (character.partnerType === "Assist Partner") return "assist";
  if (character.partnerType === "Battle Partner") return "battle";
  return "unknown";
}

function isMemoryPartnerCompatible(piece, character) {
  const memoryType = memoryEquipType(piece);
  const characterType = characterEquipType(character);
  if (memoryType === "all") return true;
  if (memoryType === "unverified") return false;
  return memoryType === characterType;
}