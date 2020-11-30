function alphabetWar(fight) {
  fight = [...fight];
  let sides = {
    left: {
      w: 4,
      p: 3,
      b: 2,
      s: 1,
      t: 'priest'
    },

    right: {
      m: 4,
      q: 3,
      d: 2,
      z: 1,
      j: 'priest'
    }
  }
  let leftSidePriest = Object.keys(sides.left).find(key => sides.left[key] === 'priest');
  let rightSidePriest = Object.keys(sides.right).find(key => sides.right[key] === 'priest');
  let leftSideCounter = 0;
  let rightSideCounter = 0;
  let changeLetter = function (item, side, otherSide, otherSidePriest) {
    if (fight[item - 1] !== otherSidePriest && fight[item - 2] !== otherSidePriest) {
      if (Object.keys(otherSide).indexOf(fight[item - 1]) !== -1) {
        fight[item - 1] = Object.keys(side).find(key => side[key] === otherSide[fight[item - 1]]);
      }
    }
    if (fight[item + 1] !== otherSidePriest && fight[item + 2] !== otherSidePriest) {
      if (Object.keys(otherSide).indexOf(fight[item + 1]) !== -1) {
        fight[item + 1] = Object.keys(side).find(key => side[key] === otherSide[fight[item + 1]]);
      }
    }
  };

  for (let i = 0; i < fight.length; i++) {
    if (fight[i] == leftSidePriest) {
      changeLetter(i, sides.left, sides.right, rightSidePriest);
    }
    else if (fight[i] == rightSidePriest) {
      changeLetter(i, sides.right, sides.left, leftSidePriest);
    }
  }

  for (let i of fight) {
    if (Object.keys(sides.left).indexOf(i) !== -1) leftSideCounter += sides.left[i] !== 'priest' ? sides.left[i] : 0;
    else if (Object.keys(sides.right).indexOf(i) !== -1) rightSideCounter += sides.right[i] !== 'priest' ? sides.right[i] : 0;
  }

  return leftSideCounter == rightSideCounter ? "Let's fight again!" : leftSideCounter > rightSideCounter ? 'Left side wins!' : 'Right side wins!';
}