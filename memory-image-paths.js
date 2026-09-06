// Assign uploaded Memory Piece artwork without modifying the Memory Piece database.
// Traitor already has an explicit PNG path; all other current pieces use JPG files.
if (typeof memoryPieces !== "undefined") {
  memoryPieces.forEach((piece) => {
    if (!piece.image) {
      piece.image = `assets/memory-pieces/${piece.id}.jpg`;
    }
  });
}
