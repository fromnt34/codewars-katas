var whoEatsWho = function (zoo) {
  let animals = {
    'antelope': { eats: ['grass'] },
    'big-fish': { eats: ['little-fish'] },
    'bug': { eats: ['leaves'] },
    'bear': { eats: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'] },
    'chicken': { eats: ['bug'] },
    'cow': { eats: ['grass'] },
    'fox': { eats: ['chicken', 'sheep'] },
    'giraffe': { eats: ['leaves'] },
    'lion': { eats: ['antelope', 'cow'] },
    'panda': { eats: ['leaves'] },
    'sheep': { eats: ['grass'] }
  };
  let scenario = [zoo];
  zoo = zoo.replace(/,/g, ' ').split(' ');

  for (let i = 0; i < zoo.length; i++) {

    if (Object.keys(animals).indexOf(zoo[i]) == -1) continue;

    if (animals[zoo[i]] !== undefined && Object.values(animals[zoo[i]].eats).indexOf(zoo[i - 1]) !== -1) {
      scenario.push(zoo[i] + ' eats ' + zoo.splice(i - 1, 1));

      i = 0;
    }

    if (animals[zoo[i]] !== undefined && Object.values(animals[zoo[i]].eats).indexOf(zoo[i + 1]) !== -1) {
      scenario.push(zoo[i] + ' eats ' + zoo.splice(i + 1, 1));

      i = i == 0 ? -1 : 0;
    }
  }

  scenario.push(String(zoo));
  return scenario;
}