var student = {};
student["name"] = "John Student";
student["phone"] = "503-456-7889";
student["email"] = "someone@school.com";
student["showInfo"] = function () { //this is a method that belongs only to student
  // alert("Student Info: " + student["name"] + "\nPhone: " + student["phone"] + "\nEmail: " + student["email"]);
  var info = "Name: " + student["name"];
  info += "<br>Phone: " + student["phone"];
  info += "<br>Email: " + student["email"];
  // return info;
  document.getElementById("studentInfoArea").innerHTML = info;
}

// object literal, separate properties with commas (just like arrays)
var studentLiteral = {
  name: "John Student",
  phone: "503-456-7889", /* you can put comments here */
  email: "someone@school.com"
};

// copied from console, but not good form
var newStudent = {name: "New Student", phone: "503-456-0000", email: "someoneelse@school.com"};

var instructor = new Object();
instructor.name = "Jane Teacher";
instructor.phone = "503-897-6342";
instructor.email = "teacher@school.com";
instructor.showInfo = function() {
  // alert("Instructor Info: " + instructor.name + "\nPhone: " + instructor.phone + "\nEmail: " + instructor.email);
  var info = "Name: " + instructor.name;
  info += "<br>Phone: " + instructor.phone;
  info += "<br>Email: " + instructor.email;
  // return info;
  document.getElementById("instructorInfoArea").innerHTML = info;
}
