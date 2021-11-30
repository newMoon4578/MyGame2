var background, backgroundImg;
var blue_scoop, blue_scoopImg, brown_scoop, brown_scoopImg, green_scoop, green_scoopImg, pink_scoop, pink_scoopImg, white_scoop, white_scoopImg;
var scoops,scoopGroup;
var cone, coneImg;
var order, orderImg;
var score;
var start, startImg, tutorial, tutorialImg, logo, logoImg, back, backImg;
var gameStates = "start"

function preload(){
    backgroundImg = loadImage("assets/background.jpg")
    blue_scoopImg = loadImage("assets/blue_scoop.png")
    brown_scoopImg = loadImage("assets/brown_scoop.png")
    coneImg = loadImage("assets/cone.png")
    green_scoopImg = loadImage("assets/green_scoop.png")
    orderImg = loadImage("assets/order.png")
    pink_scoopImg = loadImage("assets/pink_scoop.png")
    white_scoopImg = loadImage("assets/white_scoop.png")
    startImg = loadImage("assets/start.png")
    tutorialImg = loadImage("assets/tutorial.png")
    logoImg = loadImage("assets/logo.png")
    backImg = loadImage("assets/back.png")

    scoopGroup = new Group();
}

function setup(){
createCanvas(windowWidth, windowHeight)

cone = createSprite(width/2,height/2 + 250,10,10)
    cone.addImage("cone",coneImg)
    cone.scale = 0.3
    cone.visible = false

logo = createSprite(width/2-100,height/2,10,10)
    logo.addImage("logo",logoImg)
    logo.scale = 3

start = createImg("assets/start.png")
    start.position(width/2-50,height/2+50)
    start.size(200,200)

tutorial = createImg("assets/tutorial.png")
    tutorial.position(width/2-50,height/2+100)
    tutorial.size(200,200)
}

function draw(){
    background(backgroundImg)

    if(gameStates === "start"){
        start.mousePressed(gameStates = "play")
        tutorial.mousePressed(gameStates = "tutorial")
    } 

    if(gameStates === "play"){

        cone.x = World.mouseX

        game()
    }

    if(gameStates === "tutorial"){
        back = createImg("assets/back.png")
        back.position(200,height-200)
        back.size(200,200)
        back.mousePressed(gameStates = "start")
    }


    drawSprites()
}

function game(){
    //change to icecream
    if (frameCount % 40 === 0) {
    scoops = createSprite(random(100, 1000), 0, 100, 100);
    scoops.velocityY = 6;
    scoops.visible = false
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: scoops.addImage("scoop1", blue_scoopImg);
        scoops.scale = 0.3
        break;
        case 2: scoops.addImage("scoop1", brown_scoopImg);
        scoops.scale = 0.5
        break;
        case 3: scoops.addImage("scoop1", green_scoopImg);
        scoops.scale = 0.7
        break;
        case 4: scoops.addImage("scoop1", pink_scoopImg);
        scoops.scale = 0.3
        break;
        case 5: scoops.addImage("scoop1", white_scoopImg);
        scoops.scale = 0.3
        break;
    }
    scoopGroup.add(scoops);
        
    }
}
