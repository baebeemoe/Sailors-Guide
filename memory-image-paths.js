// Assign uploaded Memory Piece artwork without modifying the Memory Piece database.
// Traitor already has an explicit PNG path; all other current pieces use JPG files.
if (typeof memoryPieces !== "undefined") {
  memoryPieces.forEach((piece) => {
    if (!piece.image) {
      if (piece.id === "summer-nights-full-dream") {
        piece.image = "assets/memory-pieces/suikawari-bring-it.jpg";
      } else if (piece.id === "suikawari-bring-it") {
        piece.image = "assets/memory-pieces/summer-nights-full-dream.jpg";
      } else {
        piece.image = `assets/memory-pieces/${piece.id}.jpg`;
      }
    }
  });

  if (typeof renderMemoryPieces === "function" && document.getElementById("memoryGrid")) {
    renderMemoryPieces();
  }
}
