let names = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {},
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

function traverseA(data, depth = 0) {
  let indent = " ".repeat(depth * 4);
  Object.keys(data).forEach((key) => {
    console.log(indent + key);
    traverseA(data[key], depth + 1);
  });
}

function traverseB(node, indent = 0) {
  for (var key in node) {
    console.log(" ".repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

function org() {
  console.log(traverseA(names));
}
org();
