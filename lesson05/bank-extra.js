let bankingApp = true;
let balance = 0;
let input = 0;
let output = 0;

while (bankingApp == true) {
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

function viewBalance() {
  alert("Your balance is $" + balance);
}

function deposit() {
  input = Number(prompt("How much would you like to deposit?"));
  if (input >= 50000) {
    alert("Can not deposit at or over $50000 at any time")
  } else {
    balance += input;
  }
}

function withdraw() {
  output = Number(prompt("How much would you like to withdraw?"));
  if (output > balance) {
    alert("Not enough in your account to make this withdrawal");
  } else if (balance - output <= 300) {
    alert("This will leave you with under $300 in your account, press okay to continue");
    balance -= output;
  } else {
    balance -= output;
  }
}

function quit() {
  bankingApp = false;
}
