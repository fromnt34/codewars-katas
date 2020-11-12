function  closest(str) {
  if(str == '') return [];
  
  let weightsArr = str.split(' ').map(i => {
    if(i.length == 1) return Number(i);
    
    return i.split('').reduce((a, b) => Number(a) + Number(b));
  });
  
  return [...weightsArr].sort((a, b) => a - b).map((i, idx, arr) => {
    let smallestDistance = Math.max(...arr);
    
    for(let j = 0; j < arr.length; j++) {
      if(arr[j + 1] - arr[j] < smallestDistance) smallestDistance = arr[j + 1] - arr[j];
    }
    
    if(arr[idx + 1] - i == smallestDistance) return [
      [ i, weightsArr.indexOf(i), Number(str.split(' ')[weightsArr.indexOf(i)]) ], 
      
      [ arr[idx + 1], 
       
        i == arr[idx + 1] ? weightsArr.indexOf(arr[idx + 1], weightsArr.indexOf(i) + 1) :                 
        weightsArr.indexOf(arr[idx + 1]), 
       
        i == arr[idx + 1] ? Number(str.split(' ')[weightsArr.indexOf(arr[idx + 1], weightsArr.indexOf(i) + 1)]) :                 
        Number(str.split(' ')[weightsArr.indexOf(arr[idx + 1])]) ]
    ];
  }).filter(i => i !== undefined)[0];
}