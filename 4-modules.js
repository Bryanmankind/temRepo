const TheNames = require("./2-Appnames");
const question = require("./1-App");
const Age2 = require("./3-alternativeExport");
console.log(Age2);

console.log(TheNames);

const number = 20;

if (number < 12) {
  console.log("The number is below twevel");
} else {
  console.log("The number is above twevel");
}

console.log(`this is my first node app!!!`);

const Age = 25;

if (Age < 25) {
  console.log(`${TheNames.name1} is older then ${TheNAames.TheNamesname2} `);
} else {
  console.log(`${TheNames.name2} is older than ${TheNames.name1}`);
}

question(TheNames.name1, TheNames.name2);
