// var students = new Array("Jane Citizen", "John Student", "Jill Person", "Jack Public");
var students = new Array();
var tableHeaderRow = "<tr><th>Name</th><th>Phone</th><th>E-Mail</th></tr>";

// var jane = new Array("Jane Citizen", "503-123-4567", "jane@test.com"); // another way to do it s
// students.push(jane);

// inital data load
students.push(new Array("Jane Citizen", "503-123-4567", "jane@test.com"));
students.push(new Array("John Student", "503-765-4321", "jstudent@work.com"));
students.push(new Array("Jill Person", "503-555-4567", "jillp@somewhere.com"));
students.push(new Array("Jack Public", "503-666-4567", "jackpub@pdx.com"));

//buld the table with student listing on inital load
buildTable();

// build table
function buildTable() {
  var studentTable = document.getElementById("studentList");
  studentTable.innerHTML = tableHeaderRow;
  var message = "Students in the class:";
  // message += "\n" + students[0];
  // message += "\n" + students[1];
  for (var index = 0; index < students.length; index++) {
    message += "\n   " + students[index];

    var studentRow = "<tr><td>" + students[index][0] + "</td>";
    studentRow += "<td>" + students[index][1] + "</td>";
    studentRow += "<td>" + students[index][2] + "</td></tr>";
    studentTable.innerHTML += studentRow;
  }
  studentTable.innerHTML += "<tr><td colspan=\"2\">Total Students:</td><td>" + students.length + "</td></tr>"
  console.log(message);
}

// when click button add new student from user input
function addStudent() {
  var name = prompt("What is the student's name:","");
  var phone = prompt("What is the student's phone number:","");
  var email = prompt("What is the student's e-mail:","");
  students.push(new Array(name, phone, email));
  // var studentRow = "<tr><td>" + name + "</td>";
  // studentRow += "<td>" + phone + "</td>";
  // studentRow += "<td>" + email + "</td></tr>";
  // studentTable.innerHTML = studentRow;
  buildTable();
}
