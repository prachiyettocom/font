nosex=0;
nosey=0;
leftwristx=0
rightwristx=0

difference=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw(){
    background('#125A9B');
    document.getElementById("text_size").innerHTML="width and height of the text is "+difference+"px";
    fill('white');
    stroke('black');
    text('prachi sharma',200);
    textSize(difference);
}
function modelLoaded(){
    console.log('poseNet is intialised');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+nosex+" nosey= "+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        console.log("leftwristx= "+leftwristx+" rightwristx= "+rightwristx);
        difference=floor(leftwristx-rightwristx);
    }
}