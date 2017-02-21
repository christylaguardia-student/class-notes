var today = new Date();

/*
console.log("Current hour: " + today.getHours());
if (today.getHours() < 12) {
  alert("Good Morning!");
} else if (today.getHours() < 17) { //dont have to say >12 because it'll evaluate first if then skip
  alert("Good Afternoon!");
} else {
  alert("Good Evening!");
}
*/

/*
switch (today.getHours()) {
  case (9): {
    alert("Good Morning! (9:00)");
    break; // without the break, all the cases will show up
  }
  case (10): {
    alert("Good Morning! (10:00)");
    break;
  }
  case 11: {
    alert("Good Morning! (11:00)");
    break;
  }
  // repeat for every hour
  default: {
    alert("Good Morning! (Default)");
    break;
  }
}
*/

/*var currentHours = today.getHours();
var currentMinutes = today.getMinutes();

if ((currentHours >= 10) && (currentMinutes >= 30)) {
  alert("Getting close to 2nd breakfast.");
}

// between 10:30 and 11:15, never true at same time
var afterTenThirty = (currentHours == 10) && (currentMinutes >= 30);
var beforeElevenFifteen = (currentHours == 11) && (currentMinutes <= 15);
if (afterTenThirty || beforeElevenFifteen) {
  alert("Getting close to 2nd breakfast.");
}

// another way to do it is by checking if >= 10:30 and <= 11:15
*/

/*
if (0) {
  alert("Falsey Statement");
}
if (1) {
  alert("Truthy Statement");
}
if (1 && 0) {
  alert("Logical Truthy Statement");
}
if (1 || 0) {
  alert("Logical Truthy Statement");
}
today = null;
if (today) {
  alert("Object Exists (truthy)");
}
*/

/*
switch (true) {
  case (today.getHours() < 12): {
    alert("Good Morning!");
    break;
  }
  case (today.getHours() < 17): {
    alert("Good Afternoon!");
    break;
  }
  default: {
    alert("Good Evening!");
    break;
  }
}
*/

for (var counter=1; counter <= 3; counter++) {
  alert("Current Count: " + counter);
}
