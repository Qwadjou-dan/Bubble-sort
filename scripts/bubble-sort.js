

// Converting inputted value into an Array

document.querySelector('.js-done-button').addEventListener('click', () => {

  let input = document.querySelector('.js-number-input').value;
  nums = input.split(',').map(Number);

// Generating the HTML

  let barsHTML = '';

  nums.forEach((num) => {

    barsHTML += `
      <div class="unsorted-bar-design">${num}</div>
    `
  })

  document.querySelector('.js-bar')
    .innerHTML = barsHTML;
  
})


// Sorting function (Bubble Sort)

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


// Sorted Bars Display on Button Click

 document.querySelector('.js-sort-button')
  .addEventListener('click', () => {

    let sortedNums = bubbleSort(nums);


// Generating the HTML
    let sortedBarsHTML = '';

    sortedNums.forEach((num) => {

      sortedBarsHTML += `
        <div class="sorted-bar-design">${num}</div>
      `
    })

    document.querySelector('.js-bar')
      .innerHTML = sortedBarsHTML;

    });


