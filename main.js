function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    

}
function draw(){
    
    image(video,100,100,400,300 );
    fill(205,0,26)
    ellipse(30, 40, 55, 55 );
    ellipse(600, 40, 55, 55);
    ellipse(30, 440, 55, 55);
    ellipse(600, 440, 55, 55);
    fill(34,139,34)
    rect(57, 32, 515, 30)
    rect(57, 425, 515, 30)
    rect(10, 65, 35, 350);
    rect(580, 65, 35, 350);
  
    
    }

    function take_snapshot(){
        save('Manjeer.png');
    }
    