function listSquared(m, n) {
  let collector = [];

  for (let i = m; i <= n; i++) {
    let sumOfSquares = 0;

    for (let j = 0; j <= i; j++) if (i % j == 0) sumOfSquares += Math.pow(j, 2);

    if (Math.sqrt(sumOfSquares) % 1 == 0) collector.push([i, sumOfSquares]);
  }

  return collector;
}