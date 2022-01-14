let notes = [];
const p = document.querySelector("#result");

// Given a list of notes with respective credits, this function calculates the weighted average
// of this list
function calculatewWeightedAverage() {
  // Calculate the product note * credit for each note object and save each result in a array
  const notesWithCredit = notes.map(function (noteObj) {
    return noteObj.note * noteObj.credit;
  });

  // Calculate the sum of the elements of the array notesWithCredit and return its value
  const sumOfNotesWithCredit = notesWithCredit.reduce(function (
    sum = 0,
    currentValue
  ) {
    return sum + currentValue;
  });

  // For each element (object) of the array notes, extract its credit value to the credits array
  const credits = notes.map(function (noteObj) {
    return noteObj.credit;
  });

  // Calculate the sum of all values of the array credits
  const sumOfCredits = credits.reduce(function (sum = 0, currentValue) {
    return sum + currentValue;
  });

  const weightedAverage = sumOfNotesWithCredit / sumOfCredits;

  p.innerHTML = "Weighted average: " + weightedAverage;

  return weightedAverage;
}

function sendData() {
  const course = document.querySelector("#inputCourse");
  const note = document.querySelector("#inputNote");
  const credit = document.querySelector("#inputCredit");
  const btnWAverage = document.querySelector("#btnWAverage");

  p.innerHTML = "";

  if(!course.value || !note.value || !credit.value) {
    p.innerHTML = "You have not inputted one o more data!";
    return;
  }

  btnWAverage.disabled = false;

  const noteObj = {
    course: course.value,
    note: Number(note.value),
    credit: Number(credit.value)
  };

  
  //console.log(noteObj.course);
  //console.log(noteObj.note);
  //console.log(noteObj.credit);
  //console.log(noteObj.note + noteObj.credit);

  course.value = "";
  note.value = "";
  credit.value = "";

  notes.push(noteObj);
  console.log(notes);
}

/*
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
*/

//console.log(calculatewWeightedAverage(notes));
