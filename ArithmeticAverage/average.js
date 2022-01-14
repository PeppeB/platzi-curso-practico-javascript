/*
const list1 = [100, 200, 300, 500];

let sumList1 = 0;
list1.forEach((elem) => (sumList1 += elem));
const averageList1 = sumList1 / list1.length;
console.log(averageList1);
*/

/*
function calculateAverage(list = []) {
  let sumList = 0;
  list1.forEach((elem) => (sumList += elem));
  const averageList = sumList / list.length;
  return averageList;  
}

const list = [100, 200, 300, 500];
const averageList = calculateAverage(list);
*/

function calculateAverage(list = []) {
  const sumList = list.reduce(function (accumulatedValue = 0, newValue) {
    return accumulatedValue + newValue;
  });
  const averageList = sumList / list.length;
  return averageList;
}

list = [100, 200, 300, 500];
const averageList = calculateAverage(list);
console.log(averageList);
