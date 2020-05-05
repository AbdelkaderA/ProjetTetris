const size = 40;

function initializeView(grille) {
  let dess = document.getElementById("jeu");
  dess.width = grille.width * size;
  dess.height = grille.height * size;
  let context = dess.getContext("2d");
  dessinBlock(grille, context);
  // window.setInterval(dessinBlock,500,grille,context);
}

function dessinBlock(grille, context) {
  context.clearRect(0, 0, grille.width * size, grille.height * size);
  let cells = grille.bloc.cells[grille.orientation];
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j]) {
        context.fillStyle = grille.bloc.color;
        context.fillRect(
          (grille.x + j) * size,
          (grille.y + i) * size,
          size,
          size
        );
        context.strokeStyle = "black";
        context.strokeRect(
          (grille.x + j) * size,
          (grille.y + i) * size,
          size,
          size
        );
      }
    }
  }
  window.requestAnimationFrame(() => dessinBlock(grille, context));
}
