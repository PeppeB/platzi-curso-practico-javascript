const salariesCol = colombia.map(
    function(person) {
        return person.salary;
    }
);

// We have to calculate the median of the salaries. Before this we have to sort the salaries array.

const salariesColSorted = salariesCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// This function check if a integer numberis even
function isEven(number) {
    return number % 2 === 0;
}

function calculateArithmeticAverage(list = []) {
    if(list.length === 0) {
        console.log("Empty list!");
        return -1;
    }

    const sumListElments = list.reduce(
        function(accumulatedValue = 0, newValue) {
            return accumulatedValue + newValue;
        }, []
    );

    const arithmeticAverage = sumListElments / list.length;

    return arithmeticAverage;
}

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
        median = calculateArithmeticAverage(list[half1], list[half2]);
    } else {
        median = list[half];
    }
    
    return median;
}


console.log(salariesMedian(salariesColSorted));