function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;

  let result = false;

  for (let i in o1) {
    for (let j in o2) {
      if (i === j) {
        if (o1[i] !== null && o1[i] !== undefined && o2[j] !== null && o2[j] !== undefined) {
          if (Object.keys(o1[i]).length !== Object.keys(o2[j]).length) return false;
        }

        if (typeof o1[i] !== 'object' && typeof o2[j] !== 'object') {
          if (o1[i] === o2[j]) result = true;
          else return result = false;
        }

        else deepCompare(o1[i], o2[j]);

        break;
      }
    }
  }

  return result;
};