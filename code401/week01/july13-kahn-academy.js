var xPositions = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350];
var yPositions = [200, 200, 150, 175, 100, 50, 225, 300, 50, 250, 175, 125, 325, 100];

randomColor = function() {
    var color1 = Math.floor(Math.random() * 255) + 1;
    var color2 = Math.floor(Math.random() * 255) + 1;
    var color3 = Math.floor(Math.random() * 255) + 1;
    
    var rgb = color1 + "," + color2 + "," + color3;
    
    return rgb;
};

draw = function() {
    background(204, 247, 255);
    
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        
        fill(randomColor());
        
        ellipse(xPositions[i], yPositions[i], 10, 10);
        if(yPositions[i] > height) {
            yPositions[i] = xPositions[i] -height ;
        } else {
            yPositions[i] += 5;
        }
    }
    
    
    
};
