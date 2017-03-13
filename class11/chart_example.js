var products = [];

// products.push({ label: "wine glass", y: 7 });
// products.push({ label: "sleeping bag", y: 3 });
// products.push({ label: "pizza cutter", y: 10 });
// products.push({ label: "unicorn", y: 2 });

var Prodcut = function(name, imageSource) {
  this.label = name;
  this.image = imageSource;
  this.y = 0;
}

products.push(new Prodcut("Bag", "bag.jpg"));
products.push(new Prodcut("Wine Glass", "wine-glass.jpg"));
products.push(new Prodcut("Sleeping Bag", "sleeping-bag.jpg"));
products[0].y = 5;
products[1].y = 6;
products[2].y = 1;


function showChart() {
	var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Basic Column Chart - 'Hello World' Version",
      fontColor: "blue",
      fontFamily: "Optima"
		},
		animationEnabled: false,   // change to true
		data: [
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
			dataPoints: products
		}
		]
	});
	chart.render();
}

window.addEventListeners("load", showChart());
