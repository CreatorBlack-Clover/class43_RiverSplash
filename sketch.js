var gameState = "start";
var bubbleImg, bubble;
var foodImg, food, rockImg, rock, fishImg, fish, SceneImg, Scene;

function preload()
{
  BackgroundImg();
  //fishImg = loadImage("Game_Sprites/whale.png");

}

function setup() {
  createCanvas(1200,800);
  
  //fish = createSprite(600, 400, 50, 50);

  // scene of the game
  Scene = createSprite(600,400,5,5);
  Scene.addImage("background",SceneImg);
  Scene.scale = 2;

}

function draw() {
  background("black"); 
  drawSprites();
}

function BackgroundImg()
{
  if(gameState === "start")
  {
    SceneImg = loadImage("Game_Sprites/HomeBG.jpg");
  }
}