let runApplication = true;
let balance = 0;
let input = 0;
let output = 0;

while (runApplication == true) {
  input = prompt("What would you like to do?\nB = to view balance\nD = to deposit\nW = to withdraw\nQ = to quit application");
  switch (input.toUpperCase()) {
    case 'B':
      printBalance();
      break;

    case 'D':
      deposit();
      break;

    case 'W':
      withdraw();
      break;

    case 'Q':
    case undefined:
      quit();
      break;
  }
}

function printBalance() {
  alert("Your balance is $" + balance);
}

function deposit() {
  input = Number(prompt("How much would you like to deposit? "));
  balance += input;
}

function withdraw() {
  output = Number(prompt("How much would you like to withdraw?"));
  balance -= output;
}

function quit() {
  runApplication = false;
}
