/*

// AND, OR and NOT are logical operators
// AND &&
//OR ||
// NOT !

const isAdult = true; // A
const hasLicence = true; // B

console.log(isAdult && hasLicence);
console.log(isAdult || hasLicence);
console.log(!isAdult);
console.log(!hasLicence);

if (isAdult && hasLicence) {
  console.log("Can drive");
} else {
  console.log("Can't drive");
}

const hasACar = false; // C
console.log(isAdult && hasLicence && hasACar);


// Question.

const dolphine = (96 + 108 + 89) / 3;
console.log(`dolphines score ${dolphine}`);
const koalas = (88 + 91 + 110) / 3;
console.log(`koalas score ${koalas}`);

if (dolphine > koalas) {
  console.log(`dolphines win!`);
} else if (dolphine < koalas) {
  console.log(`koalas win!`);
} else {
  console.log("match is draw");
}

// bonus 1.

if (dolphine > koalas && dolphine >= 100) {
  console.log(`dolphines win!`);
} else if (dolphine < koalas && koalas >= 100) {
  console.log(`koalas win!`);
} else if (dolphine === koalas) {
  console.log("match is draw!");
} else {
  console.log("nobody wins!");
}

// bonus 2.

if (dolphine > koalas && dolphine >= 100) {
  console.log(`dolphines win!`);
} else if (dolphine < koalas && koalas >= 100) {
  console.log(`koalas win!`);
} else if (dolphine === koalas && dolphine >= 100 && koalas >= 100) {
  console.log("match is draw!");
} else {
  console.log("nobody wins!");
}

*/
