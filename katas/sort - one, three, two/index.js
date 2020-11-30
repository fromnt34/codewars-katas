function sortByName(ary) {
  let nums = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };
  let divideNum = function (num) {
    num = String(num);
    let divideNums = [];

    if (Number(num) >= 20) {
      for (let i = 0; i < num.length; i++) {
        if (Number(num) - divideNums.reduce((a, b) => a + b, 0) <= 19) {
          divideNums.push(Number(num) - divideNums.reduce((a, b) => a + b));
        }

        else divideNums.push(Number(num[i] + '0'.repeat(num.length - i - 1)));
      }
    }
    else divideNums.push(Number(num));

    return divideNums.length == 1 ? divideNums : divideNums.filter(i => i !== 0);
  };
  let convertToCapitalNum = function (num) {
    console.log(num)
    let collector = [];

    for (let i = 0; i < num.length; i++) {
      for (let j of Object.keys(nums)) {
        if (num[i] >= 20) {
          if (String(num[i])[0] == j) {
            if ((String(num[i]).match(/0/g) || []).length == 0) collector.push(nums[j]);

            else if ((String(num[i]).match(/0/g) || []).length == 1) {
              if (num[i] == 20 || num[i] == 40) collector.push(num[i] == 20 ? 'twenty' : 'forty');
              else collector.push(nums['1' + j].replace(/een/, 'y'));
            }

            else if ((String(num[i]).match(/0/g) || []).length == 2) collector.push(nums[j] + ' hundred');
          }
        }

        else {
          if (num[i] == j) collector.push(nums[j]);
        }
      }
    }

    return collector.join(' ');
  };

  let capitalNums = ary.map(i => convertToCapitalNum(divideNum(i)));
  capitalNums.sort();

  let convertToNum = function (capitalNum) {
    capitalNum = capitalNum.split(' ');
    let convertedNum = [];

    for (let i = 0; i < capitalNum.length; i++) {
      for (let j of Object.values(nums)) {
        if (Object.keys(nums).find(item => nums[item] == capitalNum[i]) == undefined) {
          if (capitalNum[i].replace(/ty/, 'teen') == j || capitalNum[i] == 'twenty' || capitalNum[i] == 'forty') {
            if (capitalNum[i] == 'twenty' || capitalNum[i] == 'forty') {
              convertedNum.push(capitalNum[i] == 'twenty' ? 20 : 40);
              break;
            }
            else convertedNum.push((Object.keys(nums).find(item => nums[item] == capitalNum[i].replace(/ty/g, 'teen')) - 10) * 10);
          }
        }

        else {
          if (capitalNum[i] == j) {
            if (capitalNum[i + 1] == 'hundred') {
              convertedNum.push(Object.keys(nums).find(item => nums[item] == capitalNum[i]) * 100);
            }
            else convertedNum.push(Number(Object.keys(nums).find(item => nums[item] == capitalNum[i])));
          }
        }
      }
    }

    return convertedNum.reduce((a, b) => a + b);
  };

  let sortedNums = capitalNums.map(i => convertToNum(i));

  return sortedNums;
}