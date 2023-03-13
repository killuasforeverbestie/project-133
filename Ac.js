Status = "";
AC_image = "";
objects =[];

function preload(){
AC_image = loadImage("AC image.jpeg");
}

function setup(){
canvas = createCanvas(640,350);
canvas.position(315,200);
object_Detector = ml5.objectDetector('cocossd' ,modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
console.log("MOdel Loaded!");
Status = true;
object_Detector.detect(AC_image,gotResults);

}

function gotResults(error,results){
if(error){
console.error(error);
}
console.log(results);
objects = results;
}

function draw(){
image(AC_image,0,0,640,350);
if(Status != ""){
for(i = 0; i < objects.length; i++);
document.getElementById("Status").innerHTML = "Status: Object Detected";
}
}