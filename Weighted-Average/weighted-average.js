// Given a list of notes with respective credits, this function calculates the weighted average
// of this list
function calculatewWeightedAverage(notes) {
    
  // Calculate the product note * credit for each note object and save each result in a array
  const notesWithCredit = notes.map(function (noteObj) {
    return noteObj.note * noteObj.credit;
  });

  // Calculate the sum of the elements of the array notesWithCredit and return its value
  const sumOfNotesWithCredit = notesWithCredit.reduce(function (
    previousValue,
    currentValue
  ) {
    return previousValue + currentValue;
  });

  // For each element (object) of the array notes, extract its credit value to the credits array
  const credits = notes.map(function (noteObj) {
    return noteObj.credit;
  });

  // Calculate the sum of all values of the array credits
  const sumOfCredits = credits.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });

  const weightedAverage = sumOfNotesWithCredit / sumOfCredits;

  return weightedAverage;

}

const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5,
  },
];

console.log(calculatewWeightedAverage(notes));