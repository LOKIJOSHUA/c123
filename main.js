x = 0;
y = 0;
apple = "";
speakdata = "";
to_number = "";
draw_apple = "";
screen_width = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number = Number(content);
 if(Number.isInteger(to_number))
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    document.getElementById("status").innerHTML = "Started Drawing apples " + draw_apple - "set";

}



  function setup() 
 {
screen_width = window.innerwidth
screen_height = window.innerheight;
}

function draw() {
  if(draw_apple == "set") 
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";+
    speak()
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      x = Math.floor(Math.random() * 400);
      Image(apple, x, y, 50, 50);
    }
  }
}

function speak(){;
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = ""
}
function preload() {
  apple = "apple.png"
}
function createCanvas()
createcanvas()
screen_width = 150;
screen_height = 150;
apple.png = 
function image()
{
apple =  apple.png; 


}
