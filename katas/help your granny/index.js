function tour(friends, fTowns, distTable) {
  let friendsCopy = friends;
  
  for(let i = 0; i < fTowns.length; i++) {
    for(let j = 0; j < distTable.length; j++) {
      if(fTowns[i][1] == distTable[j]) {
        fTowns[i].splice(1, 1, distTable[j + 1]);
        break;
      }
    }
  }
  
  for(let i = 0; i < friendsCopy.length; i++) {
    for(let j = 0; j < fTowns.length; j++) {
      if(friendsCopy[i] == fTowns[j][0]) friendsCopy.splice(i + 1, 0, fTowns[j][1]);
    }
  }
  
  return Math.floor(
    friendsCopy.filter(i => typeof i == 'number').map((i, idx, arr) => {
      if(arr[idx + 1] == undefined) return i;
      else return Math.sqrt(Math.pow(arr[idx + 1], 2) - Math.pow(i, 2));
    }).reduce((a, b) => a + b) + distTable[1]
  );
}