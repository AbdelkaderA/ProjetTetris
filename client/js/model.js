function initializeModel(grille) {
  grille.cells = [];
  grille.width = 12;
  grille.height = 18;
  grille.bloc = null;
  grille.orientation = -1;
  grille.x = -1;
  grille.y = -1;
  initializeGrille(grille);
  chooseBloc(grille);
  window.setInterval(update, 500, grille);
}
function initializeGrille(grille) {
  for (let i = 0; i < grille.height; i++) {
    grille.cells[i] = [];
    for (let j = 0; j < grille.width; j++) {
      grille.cells[i][j] = 0;
    }
  }
}
function chooseBloc(grille) {
  // Choisi un bloc de manière aléatoire
  // On veut récupérer l'index du bloc donc BLOCS []
  // La fonction Math.random retourne un nombre entre 0 et 1 avec 1 non compris donc Math.floor pour retourner un entier
  // Object.keys(objet) retourne un tableau de clés, car on ne peut pas faire un .length directement sur un objet
  // Math.random retourne un nombre entre 0 et 1 alors qu'on veut un bloc dont l'index est compris entre 1 et 4 donc +1
  grille.bloc =
    BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1];
  // Choisi une orientation sur un bloc de manière aléatoire
  grille.orientation = Math.floor(Math.random() * grille.bloc.cells.length);
  grille.x = grille.width / 2 - 1;
  grille.y = 0;
}
function update(grille) {
  if (grille.y < grille.height - grille.bloc.cells[grille.orientation].length) {
    grille.y++;
  } else {
    // stockBloc(grille);
    // chooseBloc(grille);
  }
}
function stockBloc(grille) {
  let cells = grille.bloc.cells[grille.orientation];
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j]) {
        grille.cells[grille.y + i][grille.x + j] = grille.bloc.id;
      }
    }
  }
  console.log(grille.cells);
}
