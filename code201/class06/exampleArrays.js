// var students = new Array("Jane Citizen", "John Student", "Jill Person", "Jack Public");
var students = new Array();
var tableHeaderRow = "<tr><th>Name</th><th>Phone</th><th>E-Mail</th></tr>";

// var jane = new Array("Jane Citizen", "503-123-4567", "jane@test.com"); // another way to do it s
// students.push(jane);

// inital data load
// put unnamed objects in array
var student = {name: "John Student", phone: "503-456-7889", email: "someone@school.com"};
students.push(student);
// or just do this
students.push({name: "Jane Citizen", phone: "503-123-4567", email: "jane@test.com"});
students.push({name: "John Student", phone: "503-456-7889", email: "someone@school.com"});
students.push({name: "Jill Person", phone: "503-555-4567", email: "jillp@somewhere.com"});
students.push({name: "Jack Public", phone: "503-666-4567", email: "jackpub@pdx.com"});

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

    var studentRow = "<tr><td>" + students[index].name + "</td>"; // change to .name for the object in the array
    studentRow += "<td>" + students[index].phone + "</td>";
    studentRow += "<td>" + students[index].email + "</td></tr>";
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
  // students.push(new Array(name, phone, email));
  students.push({name, phone, email});
  // var studentRow = "<tr><td>" + name + "</td>";
  // studentRow += "<td>" + phone + "</td>";
  // studentRow += "<td>" + email + "</td></tr>";
  // studentTable.innerHTML = studentRow;
  buildTable();
}
