function Student(name, picture, gitHub) {
  this.name = name;
  this.gitHub = gitHub;
  this.picture = picture;
}

var students = [];

students.push(new Student("John Doe", "head-icon.png"," "));
students.push(new Student("Jason", "head-icon.png"," "));
students.push(new Student("Jack Ripper", "head-icon.png"," "));
students.push(new Student("Fred Kruger", "head-icon.png"," "));

function makeList() {
  var list = document.getElementById("studentList");
  for (var i = 0; i < students.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = students[i].name;
    list.appendChild(listItem);
  }
}

window.addEventListener("load", "makeList");
