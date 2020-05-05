function initializeController(grille) {
  window.onkeydown = (event) => {
    switch (event.code) {
      case "ArrowUp":
        incOrientation(grille);
        break;
      case "ArrowRight":
        incADroite(grille);
        break;
      case "ArrowLeft":
        incAGauche(grille);
        break;
      case "ArrowDown":
        update(grille);
        break;
    }
  };
}
