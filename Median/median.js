/* 
    - input : list of integers

    - sort the list in ascending
    - if list.length is an odd number
        posCentr = [list.length / 2] ([]: parte intera)
        median = element of list in position posCentr
      else
        posCentr1 = list.length / 2
        posCentr2 = posCentr1 + 1
        median = (element in posCentr1 + element in posCentr2) / 2
    
    - output: median            
    
*/

function calculateMedian(list = []) {
  if (list.length === 0) {
    return "emptyList";
  }

  // Sorting the list in ascending
  list.sort((a, b) => a - b);

  let median = 0;

  if (list.length % 2 !== 0) {
    const posCentr = parseInt(list.length/2);
    median = list[posCentr];
  } else {
    const posCentr1 = parseInt((list.length - 1) / 2);
    const posCentr2 = posCentr1 + 1;
    //console.log("Central position 1: " + posCentr1);
    //console.log("Central position 2: " + posCentr2);
    median = (list[posCentr1] + list[posCentr2]) / 2;
  }

  return median;
}

function showResult() {
  console.log("Input list: ", list);
  let result = calculateMedian(list);

  if (result == "emptyList") {
    console.log("The list must have at least one element!\n");
    return;
  }

  console.log("Sorted list: ", list);
  console.log("Median: " + result);
  console.log();
}

let list;
showResult();
/*
console.log("Input list: ", list);
console.log("Median: " + calculateMedian(list));
console.log();
*/

list = [5];
showResult();
/*
console.log("Input list: ", list);
console.log("Median: " + calculateMedian(list));
console.log();
*/

list = [8, 2, 10];
showResult();
/*
console.log("Input list: ", list);
console.log("Median: " + calculateMedian(list));
console.log();
*/

list = [40, 15, 10, 30, 18, 8, 2];
showResult();
/*
console.log("Input list: ", list);
console.log("Median: " + calculateMedian(list));
console.log();
*/

list = [15, 10, 8, 2];
showResult();
/*
console.log("Input list: ", list);
console.log("Median: " + calculateMedian(list));
console.log();
*/

list = [15, 18, 30, 65, 40, 10, 8, 2];
showResult();
/*
console.log("Input list: ", list);
console.log("Median: " + calculateMedian(list));
*/

list = [15, -8, -10, 2];
showResult();