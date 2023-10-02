function setup() {
    createCanvas(500, 500);
      background("purple");
  }
  
  function draw() {
  
    stroke("red");
    fill("red");
   
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
    rect(mouseX,mouseY,25,25)
    
    }
  }