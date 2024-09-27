
let nums = [5, 6, 2, 1, 9, 4, 3, 8, 7, 0];

let bubbleSort = (array) => {
  for(let i = 0; i < array.length; i++){
    for(let x = 0; x < array.length - 1; x++){
      if(array[x] > array[x+1]){
        let y = array[x];
        array[x] = array[x+1];
        array[x+1] = y;
      };
    };
  };
  return array;
};

// console.log(bubbleSort(nums));






