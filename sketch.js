var ball,db,readpos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

db = firebase.database();

db.ref("ball/position").on("value",function (data){
readpos = data.val();
ball.x = readpos.x;
ball.y = readpos.y;


});





}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    db.ref("ball/position").set({
    x : readpos.x + x,
    y :readpos.y + y
    })
}
