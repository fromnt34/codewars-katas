var numberToPrice = function (number) {
  if (typeof number !== 'number') return 'NaN';

  number = number.toFixed(3).slice(0, -1);
  let cents = String(number).slice(String(number).indexOf('.'), String(number).indexOf('.') + 3);
  let ints = String(number).slice(0, String(number).indexOf('.'));

  return ints.split('').reverse().map((i, idx, arr) => {
    if (idx !== 0 && i !== '-' && idx % 3 == 0) return i + ',';
    else return i;
  }).reverse().join('') + cents;
}