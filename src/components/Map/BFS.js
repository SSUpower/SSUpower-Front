const BFS = (start, Destdepth, classLocation, array3D) => {

	if (!start || !Destdepth || !classLocation || !array3D) {
		console.error('One or more arguments are undefined');
		return;
	}

  const queue = [];
  const visited = new Set();
  queue.push([start, start]);

  const ROW = array3D[0].length;
  const COL = array3D[0][0].length;

  while (queue.length > 0) {
    const current = queue.shift();
    const [depth, row, col] = current[current.length - 1];
    console.log(depth, row, col);

    // add the current position to visited set
    const key = `${depth}-${row}-${col}`;
    visited.add(key);

    // handle going up or down the stairs
    if (array3D[depth][row][col] === '3') {
      if (depth < array3D.length-1 && !visited.has(`${depth+1}-${row+1}-${col}`)) {
        queue.push([...current, [depth+1, row+1, col], [depth+1, row+1, col+1]]);
      }
      continue;
    } else if (array3D[depth][row][col] === '2') {
      if (depth > 0 && !visited.has(`${depth-1}-${row-1}-${col}`)) {
        queue.push([...current, [depth-1, row-1, col], [depth-1, row-1, col+1]]);
      }
      continue;
    }
    else if (array3D[depth][row][col] === '4') {
      if (!visited.has(`${Destdepth}-${row-1}-${col}`)) {
        queue.push([...current, [Destdepth, row, col], [Destdepth, row, col-1]]);
      }
      continue;
    }

    // check for neighboring positions and add them to the queue if they haven't been visited yet
    if (col > 0 && !visited.has(`${depth}-${row}-${col-1}`)) {
      if (depth === Destdepth && array3D[depth][row][col-1] === classLocation) {
				return [...current, [depth, row, col-1]];
			}
			else if (canMoveTo(array3D[depth][row][col-1]))
				queue.push([...current, [depth, row, col-1]]);
    }
    if (col < COL-1 && !visited.has(`${depth}-${row}-${col+1}`)) {
      if (depth === Destdepth && array3D[depth][row][col+1] === classLocation) {
				return [...current, [depth, row, col+1]];
			}
			else if (canMoveTo(array3D[depth][row][col+1]))
				queue.push([...current, [depth, row, col+1]]);
    }
    if (row > 0 && !visited.has(`${depth}-${row-1}-${col}`)) {
			if (depth === Destdepth && array3D[depth][row-1][col] === classLocation) {
				return [...current, [depth, row-1, col]];
			}
			else if (canMoveTo(array3D[depth][row-1][col]))
				queue.push([...current, [depth, row-1, col]]);
    }
    if (row < ROW-1 && !visited.has(`${depth}-${row+1}-${col}`)) {
      if (depth === Destdepth && array3D[depth][row+1][col] === classLocation) {
				return [...current, [depth, row+1, col]];
			}
			else if (canMoveTo(array3D[depth][row+1][col]))
				queue.push([...current, [depth, row+1, col]]);
    }
  }

  // destination not found
  console.log('Destination not found');
  return "fail";
};

// helper function to check if a position can be moved to
const canMoveTo = (char) => {
	if (char === '0' || char === '3' || char === '2' || char === '4')
  	return true;
	else
		return false;
};

export default BFS;
