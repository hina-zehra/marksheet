#! /usr/bin/env node

import inquirer from "inquirer";

const obtainedMarks = await inquirer.prompt([
  {
    message: "please enter marks of english",
    type: "number",
    name: "englishMarks",
  },
  { message: "please enter marks of urdu", type: "number", name: "urduMarks" },
  { message: "please enter marks of pst", type: "number", name: "pstMarks" },
  {
    message: "please enter marks of maths",
    type: "number",
    name: "mathsMarks",
  },
  {
    message: "please enter marks of computerScience",
    type: "number",
    name: "computerscienceMarks",
  },
  {
    message: "please enter marks of islamiat",
    type: "number",
    name: "islamiatMarks",
  },
  {
    message: "please enter marks of chemistry",
    type: "number",
    name: "chemistryMarks",
  },
  {
    message: "please enter marks of physics",
    type: "number",
    name: "physicsMarks",
  },
]);
const totalObtainedMarks =
  obtainedMarks.englishMarks +
  obtainedMarks.urduMarks +
  obtainedMarks.pstMarks +
  obtainedMarks.mathsMarks +
  obtainedMarks.computerscienceMarks +
  obtainedMarks.islamiatMarks +
  obtainedMarks.chemistryMarks +
  obtainedMarks.physicsMarks;
const totalMarks = 800;
const percentage = (totalObtainedMarks / totalMarks) * 100;
console.log("MARKSHEET");
console.log("English :" ,obtainedMarks.englishMarks);
console.log("Urdu :" ,obtainedMarks.urduMarks);
console.log("Pak studies :" ,obtainedMarks.pstMarks);
console.log("Mathematics :" ,obtainedMarks.mathsMarks);
console.log("Computer science :" ,obtainedMarks.computerscienceMarks);
console.log("Islamiat :" ,obtainedMarks.islamiatMarks);
console.log("Chemistry :" ,obtainedMarks.chemistryMarks);
console.log("Physics :" ,obtainedMarks.physicsMarks);
console.log("percentage: ", percentage ,"%");

if (percentage >= 90 && percentage <= 100) {
  console.log("GRADE A+");
} else if (percentage >= 80 && percentage <= 89) {
  console.log("GRADE A");
} else if (percentage >= 70 && percentage <= 79) {
  console.log("GRADE A-");
} else if (percentage >= 60 && percentage <= 69) {
  console.log("GRADE B");
} else if (percentage >= 50 && percentage <= 59) {
  console.log("GRADE C");
} else if (percentage >= 40 && percentage <= 49) {
  console.log("GRADE D");
} else {
  console.log("fail");
}

