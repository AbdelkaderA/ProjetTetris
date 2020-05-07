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
  grille.interval = window.setInterval(update, 500, grille);
}
function initializeGrille(grille) {
  //faire un tableau de 12*18 avec que des 0 dans toutes les cellules
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
    // Choisi un bloc de manière aléatoire
    BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1];
  // Choisi une orientation sur un bloc de manière aléatoire
  grille.orientation = Math.floor(Math.random() * grille.bloc.cells.length);
  grille.x = grille.width / 2 - 1;
  grille.y = 0;
}
function incOrientation(grille) {
  grille.orientation = (grille.orientation + 1) % grille.bloc.cells.length;
}

function incADroite(grille) {
  if (
    grille.x < grille.width - grille.bloc.cells[grille.orientation][0].length &&
    blocCanGoThere(grille, grille.x + 1, grille.y)
  ) {
    grille.x++;
  }
}

function incAGauche(grille) {
  if (grille.x > 0 && blocCanGoThere(grille, grille.x - 1, grille.y)) {
    grille.x--;
  }
}

function update(grille) {
  if (
    grille.y < grille.height - grille.bloc.cells[grille.orientation].length &&
    blocCanGoThere(grille, grille.x, grille.y + 1)
  ) {
    grille.y++;
  } else if (grille.y == 0) {
    window.clearInterval(grille.interval);
    window.alert("game over");
    location.reload();
  } else {
    stockBloc(grille);
    checkFullLine(grille);
    chooseBloc(grille);
  }
}

function blocCanGoThere(grille, x, y) {
  let cells = grille.bloc.cells[grille.orientation];
  let res = true;
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j] && grille.cells[y + i][x + j]) {
        res = false;
      }
    }
  }
  return res;
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
  //console.log(grille.cells);
}

function checkFullLine(grille) {
  for (let i = 0; i < grille.cells.length; i++) {
    //regarde chaque premiere cellule des lignes
    //et si on trouve 0 on passe a la seconde ligne
    let res = true;
    //prepare une variable
    for (let j = 0; j < grille.cells[i].length; j++) {
      //regarde chaque colone pour chaque ligne
      if (grille.cells[i][j] === 0) {
        res = false;
      }
    }
    if (res) {
      deletLine(grille, i);
    }
  }
}

function deletLine(grille, y) {
  //Choix 1:
  // for (let i = 0; i < y; i++) {
  //   for (let j = 0; j < grille.cells[y].length; j++) {
  //     grille.cells[y - i][j] = grille.cells[y - i - 1][j];
  //   }
  // }

  //Choix 2:
  for (let i = y; i > 0; i--) {
    for (let j = 0; j < grille.cells[i].length; j++) {
      grille.cells[i][j] = grille.cells[i - 1][j];
    }
  }
  for (let j = 0; j < grille.cells[y].length; j++) {
    grille.cells[0][j] = 0;
  }
}

function play() {
    window.clearInterval(grille.interval);
    initializeModel(grille);
    initializeView(grille);  

}

function stop() {
  location.reload();
}
