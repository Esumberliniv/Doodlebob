let filepath = 'dooblebob.mp3';
let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('doodlebob.mp3');
}
function setup() {
  
  createCanvas(600,600);
  
}

function draw() {

  background(64, 224, 208)
  if(mouseIsPressed){
    background('red')
    canvasPressed();
  }else{
    background('teal')
  }
  
  fill('grey')
  
  ellipse(mouseX,mouseY,10,10)
  print(mouseX,mouseY)
  square(195,165,120)
  strokeWeight(4)
  fill('grey')
  circle(230,202,20)
  circle(280,195,20)
  strokeWeight(2)
  line(221,194,214,187)
  line(228,190,226,182)
  line(234,192,237,182)
  line(273,185,266,177)
  line(280,184,277,174)
  line(284,184,286,174)
  point(228,201)
  point(279,194)
  fill('grey')
  strokeWeight(4)
  point(215,226)
  point(292,233)
  point(248,177)
  strokeWeight(4)
  circle(257,231,15)
  rect(195,282,120,30)
  fill('black')
  if (keyCode == UP_ARROW){
      fill('red');
   } 
  else if (keyCode == DOWN_ARROW){
     fill('purple');
  }
  ellipse(256,258,60,35)
  fill('white')
  strokeWeight(3)
  rect(240,242,13,15)
  rect(257,241,13,15)
  fill('grey')
  circle(257,283,10)
  triangle(257,288,251,293,262,293)
  //legs
  strokeWeight(4)
  line(225,314,224,362)
  line(289,312,289,358)
  line(222,363,200,363)
  line(287,358,265,357)
  //arms
  line(194,228,137,193)
  line(316,227,376,198)
  
  
  
  
  }


function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
/*
function setup(){
  mySound=('.mp3')
}
*/


