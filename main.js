noseX = 0;
noseY = 0;

function preload(){
mustache = loadImage('https://i.postimg.cc/9MGXr5h5/mustache-student-math-favorite-for-friday-the-the-1.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 14;
        noseY = results[0].pose.nose.y - 12;
        console.log("value x" + results[0].pose.nose.x);
        console.log("value y" + results[0].pose.nose.y);
        console.log("noseX = " + noseX)
        console.log("noseY = " + noseY)
    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(mustache, noseX, noseY, 45, 45);
}

function takesnap(){
    save('myFilterImage.png'); 
}