const size = 40;

function initializeView(grille) {
  let dess = document.getElementById("jeu");
  dess.width = grille.width * size;
  dess.height = grille.height * size;
  let context = dess.getContext("2d");
  dessin(grille, context);
}

function dessin(grille, context) {
  context.clearRect(0, 0, grille.width * size, grille.height * size);
  dessinGrille(grille, context);
  dessinBlock(grille, context);
  window.requestAnimationFrame(() => dessin(grille, context));
}

function dessinCell(context, x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * size, y * size, size, size);
  context.strokeStyle = "black";
  context.strokeRect(x * size, y * size, size, size);
}

function dessinBlock(grille, context) {
  let cells = grille.bloc.cells[grille.orientation];
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j]) {
        dessinCell(context, grille.x + j, grille.y + i, grille.bloc.color);

        // context.fillStyle = grille.bloc.color;
        // context.fillRect(
        //   (grille.x + j) * size,
        //   (grille.y + i) * size,
        //   size,
        //   size
        // );
        // context.strokeStyle = "black";
        // context.strokeRect(
        //   (grille.x + j) * size,
        //   (grille.y + i) * size,
        //   size,
        //   size
        // );
      }
    }
  }
}

function dessinGrille(grille, context) {
  for (let i = 0; i < grille.cells.length; i++) {
    for (let j = 0; j < grille.cells[i].length; j++) {
      let colorValeur = grille.cells[i][j];
      if (colorValeur > 0) {
        dessinCell(context, j, i, BLOCS[colorValeur].color);

        // context.fillStyle = BLOCS[cell].color;
        // context.fillRect(j * size, i * size, size, size);
        // context.strokeStyle = "black";
        // context.strokeRect(j * size, i * size, size, size);
      }
    }
  }
}


