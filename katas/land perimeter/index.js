function landPerimeter(arr) {
  let perimeter = 0;

  for (let j = 0; j < arr.length; j++) {
    let row = arr[j];

    for (let i = 0; i < row.length; i++) {
      if (row[i] == 'X') {
        if (row[i + 1] !== 'X') perimeter++;
        if (row[i - 1] !== 'X') perimeter++;

        if (arr[j - 1] == undefined) perimeter++;
        else if (arr[j - 1][i] !== 'X') perimeter++;
        if (arr[j + 1] == undefined) perimeter++;
        else if (arr[j + 1][i] !== 'X') perimeter++;
      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}