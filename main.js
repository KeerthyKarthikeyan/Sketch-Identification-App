function preload(){
classifier=ml5.imageClassifier('DoodleNet');

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;

}
function clearCanvas(){
   background("white");

}

function draw(){
//set stroke weight to 13
strokeWeight(13);
// set stroke color to black
stroke(0);
//on mouse press, draw line between previous and current mouse position
if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}

}

function classifyCanvas(){
  classifier.classify(canvas,Gotresult);

}

function Gotresult(error,results){
 if(error){
     console.error(error);
 }
console.log(results);
document.getElementById("label").innerHTML='Label: '+results[0].label;
document.getElementById("confidence").innerHTML='Confidence: '+Math.round(results[0].confidence*100)+'%';
utterthis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterthis);
}
