**Christy's Notes Fri Jan 27**

project trackers
waffle.io


*Functions*
<!-- named functions, code block -->
function getPerson() {

}

<!-- anonymous function, it's an expression, assigning function to variable  -->
var getPerson = function() {

};

<!-- invoke function with () -->
getPerson();

<!-- IIFE: immediately invoked function expression. create then invoke, but can't call later -->
(function(ballType)) {
  var play = "Play " + ballType;
  console.log(play);
}('rugby'));
