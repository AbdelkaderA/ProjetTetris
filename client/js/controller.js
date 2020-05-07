function initializeController(grille) { //permet le controle des directions
  window.onkeydown = (event) => {
    // console.log(event.code); //pour afficher 
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
