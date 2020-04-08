var map = [
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [1, 1, 1, 0],
  [1, 0, 1, 1],
];

var goalx = 3;
var goaly = 3;

console.log();

function maze(x, y) {
  // illegal move check
  if (x < 0 || x > map[0].length - 1 || y < 0 || y > map.length - 1)
    return false; //if it is outside of map
  if (map[y][x] == 0) return false; //it is not open

  // end move check
  if (x == goalx && y == goaly) {
    console.log("Reached goal at: " + x + ":" + y);
    return true; // if it is the goal (exit point)
  }

  if (map[y][x] == 9 || map[y][x] == 8) return false;

  console.log("Im here at: " + x + ":" + y);

  map[y][x] = 9; //here marking x,y position as part of solution path outlined by "9"

  if (maze(x + 1, y)) return true;
  if (maze(x, y + 1)) return true;
  if (maze(x, y - 1)) return true;
  if (maze(x - 1, y)) return true;

  map[y][x] = 8; //unmark x,y as part of solution path outlined by "8"

  return false;
}

maze(0, 0);
