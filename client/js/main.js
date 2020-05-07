const BLOCS = {
  1: {
    //BLOCK_L
    id: 1,
    cells: [
      [
        [true, false],
        [true, false],
        [true, true],
      ],
      [
        [true, true, true],
        [true, false, false],
      ],
      [
        [true, true],
        [false, true],
        [false, true],
      ],
      [
        [false, false, true],
        [true, true, true],
      ],
    ],
    color: "grey",
  },
  2: {
    //BLOCK_T
    id: 2,
    cells: [
      [
        [true, true, true],
        [false, true, false],
      ],
      [
        [false, true],
        [true, true],
        [false, true],
      ],
      [
        [false, true, false],
        [true, true, true],
      ],
      [
        [true, false],
        [true, true],
        [true, false],
      ],
    ],
    color: "purple",
  },
  3: {
    //BLOC_J
    id: 3,
    cells: [
      [
        [false, true],
        [false, true],
        [true, true],
      ],

      [
        [true, false, false],
        [true, true, true],
      ],

      [
        [true, true],
        [true, false],
        [true, false],
      ],

      [
        [true, true, true],
        [false, false, true],
      ],
    ],
    color: "yellow",
  },

  4: {
    //BLOCK_Z
    id: 4,
    cells: [
      [
        [true, true, false],
        [false, true, true],
      ],
      [
        [false, true],
        [true, true],
        [true, false],
      ],
    ],
    color: "pink",
  },
  5: {
    //BLOC_S
    id: 5,
    cells: [
      [
        [false, true, true],
        [true, true, false],
      ],
      [
        [true, false],
        [true, true],
        [false, true],
      ],
    ],
    color: "green",
  },
  6: {
    //BLOCK_I
    id: 6,
    cells: [[[true], [true], [true], [true]], [[true, true, true, true]]],
    color: "orange",
  },
  7: {
    //BLOC_O
    id: 7,
    cells: [
      [
        [true, true],
        [true, true],
      ],
    ],
    color: "beige",
  },
};
let grille = {};
//initializeModel(grille);
//initializeView(grille);
initializeController(grille);
