// Helpers


// This function check if an integer number is even

function isEven(number) {
    return number % 2 === 0;
}


// This function calculates the arithmetic average of the salaries list

function calculateArithmeticAverage(list = []) {
    //console.log("List of elements for the arithmetic average: ", list);
    if(list.length === 0) {
        console.log("Empty list!");
        return -1;
    }

    const sumListElments = list.reduce(
        function(accumulatedValue = 0, newValue) {
            return Number(accumulatedValue) + Number(newValue);
        }
    );

    //console.log("Somma elementi per la media aritmetica: ", sumListElments);
    const arithmeticAverage = sumListElments / list.length;

    //console.log("Arithmetic average:", arithmeticAverage);

    return arithmeticAverage;
}


// This function calculates the median of the salaries list

function salariesMedian(list = []) {
    if(list.length === 0) {
        console.log("Empty list!");
        return -1;
    }

    const half = parseInt(list.length / 2);
    let median;
    if(isEven(list.length)) {
        const half1 = half - 1;
        const half2 = half;
        median = calculateArithmeticAverage([list[half1], list[half2]]);
    } else {
        median = list[half];
    }
    
    return median;
}


// This function extracts the persons' salaries from the array Colombia (for calculating the
// general median)

const salariesCol = colombia.map(
    function(person) {
        return person.salary;
    }
);


// Sorting the salaries array

const salariesColSorted = salariesCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);



// Testing

console.log("List of the salaries: ", salariesCol);
console.log("Sorted list of the salaries: ", salariesColSorted);

// Before calculating the median of the salaries, we have to sort the salaries array.
const generalMedianCol = salariesMedian(salariesColSorted);
//console.log("Median: ", generalMedianCol);


// Calculating the median of 10% of the most profitable wages

const spliceStart = salariesColSorted.length * 90 / 100;
const spliceCount = salariesColSorted.length - spliceStart;


// Deleting spliceCount elements from the array salariesColSorted starting from the index 
// spliceStart. The deleted elements are saved into the array salariesColTop10.
const salariesColTop10 = salariesColSorted.splice(spliceStart,spliceCount);

//console.log("Top 10 salaries col",salariesColTop10);

const top10MedianCol = salariesMedian(salariesColTop10);


console.log({
    "General Median": generalMedianCol,
    "Median of 10% of the most profitable wages": top10MedianCol
})