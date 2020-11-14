const deNico = (key, m) => {
  let keySorted = key.split('').map(i => key.split('').sort().indexOf(i) + 1);
  let tableX = 0;
  let tableY = 0;
  let decodeStr = [...m].fill('');

  for (let i = 0; i < m.length; i++) {
    tableX++;

    decodeStr.splice(keySorted.indexOf(tableX) + tableY, 1, m[i]);

    if (tableX == key.length) { tableX = 0; tableY += key.length; }
  }

  return decodeStr.join('').replace(/\s+$/g, '');
}