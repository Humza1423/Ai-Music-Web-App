song_1="";
song_2="";
status_song_1="";
status_song_2="";

left_wrist_x=0;
left_wrist_y=0;
right_wrist_x=0;
right_wrist_y=0;
left_wrist_score=0;
right_wrist_score=0;
function preload(){
song_1=loadSound("music.mp3");
song_2=loadSound("music2.mp3");


}


function setup(){
canvas=createCanvas(600, 400);
canvas.center();

video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video, modelloaded);
posenet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    left_wrist_x=results[0].pose.leftWrist.x;
    left_wrist_y=results[0].pose.leftWrist.y;
    console.log("Left Wrist x="+left_wrist_x+", left wrist y="+left_wrist_y);
    
    right_wrist_x=results[0].pose.rightWrist.x;
    right_wrist_y=results[0].pose.rightWrist.y;
    console.log("Right Wrist x="+right_wrist_x+", Right wrist y="+right_wrist_y);
    left_wrist_score=results[0].pose.keypoints[9].score;
    right_wrist_score=results[0].pose.keypoints[10  ].score;
    }
    
    }

    
function modelloaded(){

    console.log("Posenet is initialized");
}


function draw(){
image(video, 0, 0, 600, 400);
fill(255, 0 , 0);
stroke(0, 0, 0);
circle(left_wrist_x, left_wrist_y, 20);

song_2.play();
status_song_1="false";

if(left_wrist_score>0.2){
song_2.stop();

    if(status_song_1="false"){
    song_1.play()
document.getElementById("display_status").innerHTML="Song 1-name"
}

}

status_song_2="false";
if(right_wrist_score>0.2){
    song_1.stop();
    circle(right_wrist_x, right_wrist_y, 20);
        if(status_song_2="false"){
              song_2.play();
    document.getElementById("display_status").innerHTML="Song 2-name"
    }
    
    }


}
