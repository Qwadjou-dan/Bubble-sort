
// Initial Bars Display (unsorted)

let nums = [5, 6, 2, 1, 9, 4, 3, 8, 7, 0];

// Generating the HTML
  let barsHTML = '';

  nums.forEach((num) => {

    barsHTML += `
      <div class="bar-design">${num}</div>
    `
  })

  document.querySelector('.js-bar')
    .innerHTML = barsHTML;


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

    let sortedNums = bubbleSort([...nums]);

    // Generating the HTML
    let sortedBarsHTML = '';

    sortedNums.forEach((num) => {

      sortedBarsHTML += `
        <div class="bar-design">${num}</div>
      `
    })

  console.log(sortedBarsHTML);

  document.querySelector('.js-bar')
    .innerHTML = sortedBarsHTML;

  });

