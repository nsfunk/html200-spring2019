const firstName = 'Natalie';
const lastName = 'Funk';
const age = 5;
const legalAge = 16;

if (age >= legalAge) {
  console.log(firstName + " " + lastName + " " + "can drive");
  console.log("They have been driving for" + " " + Number(age - legalAge) + " " + "years!");
} else {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
}
