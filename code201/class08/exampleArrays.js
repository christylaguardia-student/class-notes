var students = new Array();
var tableHeaderRow = "<tr><th>Name</th><th>Phone</th><th>E-Mail</th></tr>";

// use constructor
var Student = function(name, phone, email) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.ouputDataForTable = function() {
    var tableRow = document.createElement("tr");
    var tableData = document.createElement("td");
    tableData.textContext = this.name;
    tableRow.appendChild(tableData);
    var tableRow = document.createElement("tr");
    var tableData = document.createElement("td");
    tableData.textContext = this.phone;
    tableRow.appendChild(tableData);
    var tableRow = document.createElement("tr");
    var tableData = document.createElement("td");
    tableData.textContext = this.email;
    tableRow.appendChild(tableData);
    return tableRow;
  }
}

students.push(new Student("John Student", "503-456-7889", "someone@school.com"));
students.push(new Student("Jane Citizen", "503-123-4567", "jane@test.com"));
students.push(new Student("John Student", "503-456-7889", "someone@school.com"));
students.push(new Student("Jill Person", "503-555-4567", "jillp@somewhere.com"));
students.push(new Student("Jack Public", "503-666-4567", "jackpub@pdx.com"));

//buld the table with student listing on inital load
buildTable();

// build table
function buildTable() {
  var studentTable = document.getElementById("studentList");
  studentTable.innerHTML = tableHeaderRow;
  var message = "Students in the class:";
  for (var index = 0; index < students.length; index++) {
    var student = students[index];
    studentTable.appendChild(student.ouputDataForTable());
  }
  studentTable.innerHTML += "<tr><td colspan=\"2\">Total Students:</td><td>" + students.length + "</td></tr>"
  console.log(message);
}

// when click button add new student from user input
function addStudent() {
  var name = prompt("What is the student's name:","");
  var phone = prompt("What is the student's phone number:","");
  var email = prompt("What is the student's e-mail:","");
  students.push(new Student(name, phone, email));
  buildTable();
}
