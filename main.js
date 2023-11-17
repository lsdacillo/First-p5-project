function preload(){}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(470, 250);
    video = createCapture(VIDEO)
    video.hide()


}

function draw(){
    image(video, 50, 50, 400, 400);
    circle(40, 30, 50)
    circle(455, 30, 50)
    circle(455, 455, 50)
    circle(40, 455, 50)
    rect(50, 30, 400, 20)
    rect(50, 450, 400, 20)
    rect(30, 30, 20, 440)
    rect(450, 30, 20, 440)
}