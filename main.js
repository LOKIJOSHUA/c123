status = ""
function preload(){
    function setup() {
        canvas = createCanvas(640, 420);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(380, 380);
        video.hide();
    }
function modelloaded() {
    status = true;
    
