/**
 * 
 * @param {array} list 
 * @returns {array} modalValues: the modal values of the list
 */
function calculateModalValues(list = []) {
  const listCount = countDistinctElements(list);
  console.log(listCount);
  console.log();
  // Transform the object listCount into an array of key/values
  const listArray = Object.entries(listCount);
  console.log(listArray);
  console.log();
  //console.log(listArray[0]);
  //console.log(listArray[2][0]);
  // sort the array listArray in ascending order (based on the values associated with the keys)
  listArray.sort(function (elementA, elementB) {
    /*
    if (elementA[1] < elementB[1]) {
      return -1;
    } else if (elementA[1] === elementB[1]) {
      return 0;
    } else {
      return 1;
    }
    */
    return elementA[1] - elementB[1];
  });
  
  console.log(listArray);
  console.log();

  // searching for the modal values
  const modalValues = searchModalValues(listArray);

  return modalValues;
}

/**
 *
 * @param {array} list
 * @returns {object} countList: an object whose keys represent the distinct  elements of the
 * list and whose values represent the occurrences of them in the list.
 */
function countDistinctElements(list = []) {
  const listCount = {};
  // For each element of the list, run the code inside.
  list.map(function (element) {
    // Create the key element in the object listCount.
    // If the value of the key element is not undefined (i.e. it's defined), increment it
    // by 1, otherwise inizialize it to 1.
    // console.log(listCount[element]);
    if (listCount[element]) {
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  });
  return listCount;
}

/**
 * 
 * @param {array} listArray - An array in which every element is an array of two elements:
 * the first one is a distinct value of the input list and the second one represents its
 * occurrence in the list.
 * @returns {array} modal values of the listArray
 */
function searchModalValues(listArray) {
  const moda = listArray[listArray.length - 1][0];
  const modaNrOccurrences = listArray[listArray.length - 1][1];

  // Select the elements of the listArray having the same values as moda.
  // The result is an array of key/values, where the values are the same as the moda value.
  const modalValuesArray = listArray.filter(function (element) {
    return element[1] === modaNrOccurrences;
  });

  // Exctract from the modalValuesArray the keys of its elements (each element of th
  // modalValuesArray is an array of two elements. This function extracts the first
  // element of each array element).
  const modalValues = modalValuesArray.map(function (element) {
    if (!isNaN(element[0])) {
      return Number(element[0]);
    }
    return element[0];
  });

  return modalValues;
}


/**
 * 
 * @param {array} list
 * @description Shows the modal values of the input list
 */
function showModalValues(list = []) {
  console.log(list);
  console.log();
  console.log("Modal values:", calculateModalValues(list));
  console.log('\n\n');
}


/* TESTING */

let list = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
showModalValues(list);

list = [1, 2, 3, 1, 2, 1, 3, 4, 2, 1, 2, 2, 1];
showModalValues(list);

list = ["house", "car", "byke", "horse", "car", "horse"];
showModalValues(list);

list = [
  "square",
  "triangle",
  6,
  "rectangle",
  "square",
  "circle",
  6,
  "parallelogram",
];
showModalValues(list);