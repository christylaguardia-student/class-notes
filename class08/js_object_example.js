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

// constructor object
var Person = function(name, phone = "503-000-0000", email = "person@email.com") { // line up parameters and properties
  this.name = name; // this is like a pointer, look at the top level of the code block
  this.phone = phone;
  this.email = email;
  this.sayGreeting = function() {
    var message = "";
    var properties = Object.keys(this);
    for (var index = 0; index < properties.length; index++) {
      if ((properties[index] != "name") && (properties[index] != "sayGreeting")) {
        var propertName = properties[index];
        message += "\n   " + properties[index] + " - " + this[propertName];
      }
    }
    // if ((this.phone == "503-000-0000") || (this.email == "person@email.com")) {
    //   alert("Hello!\nMy name is " + this.name + "\nMy data is missing!");
    // } else {
    //   alert("Hello!\nMy name is " + this.name);
    // }
    alert(message);
  }
}

var mark = new Person("Mark", "555-333-4444", "mark@email.com");
