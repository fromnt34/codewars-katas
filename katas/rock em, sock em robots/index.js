function fight(robot1, robot2, tactics) {
  robot1.tactics = robot1.tactics.map(i => tactics[i]);
  robot2.tactics = robot2.tactics.map(i => tactics[i]);
  let move = robot1.speed >= robot2.speed ? true : false;

  function atack(atackRobot, defRobot) {
    defRobot.health -= atackRobot.tactics[0];
    atackRobot.tactics.shift();
  }

  while (robot1.health > 0 || robot2.health > 0) {
    if (robot1.tactics.length == 0 && robot2.tactics.length == 0) {
      return robot1.health == robot2.health ? 'The fight was a draw.' :
        robot1.health > robot2.health ? robot1.name + ' has won the fight.' : robot2.name + ' has won the fight.';
    }

    move ? atack(robot1, robot2) : atack(robot2, robot1);

    if (robot1.health <= 0) return robot2.name + ' has won the fight.';
    if (robot2.health <= 0) return robot1.name + ' has won the fight.';

    move = !move;
  }
}