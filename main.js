img="";
status="";
objects = [];
function preload(){
img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}ObjectDetector.detect(video, gotResult);
function draw() {
    image(video, 0, 0, 380, 380);
    if(status != "")
    {
        r = random(255)
        g = random(255)
        b = random(255)
        for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status : Object Detected"
        document.getElementById("number of objects").innerHTML = "Number of Objects Detects are : "+ objects.length
        fill(r,g,b);
        percent = floor(objects[i].confidence * 100)
        text(objects[i.label] + " " + percent + "%", objects[i].x, objects[i].y,)
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        {
            document.getElementById("status").innerHTML = "Status : Object Detected"
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y,)
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    fill("FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
   rect(30, 60, 450, 350);
   fill("FF0000");
   text("Cat", 320, 120)
   noFill()
   stroke("#FF0000");
   rect(300, 90, 270, 320);
}
function modelLoaded() {
    console.log("Model loaded!");
    status = true;
    ObjectDetector.detect(video, gotResult);
}
function gotResult(error, result) {
    if (error) {
        console.log (error);
    }
    console.log(results);
    objects = results;
}
function start(){
    ObjectDetector = ml5.ObjectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
}