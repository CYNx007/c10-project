var ship, ship_floating
var back, bg


function preload() {
  ship_floating = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  bg = loadImage("sea.png")
}


function setup() {
  createCanvas(400, 400);
  back=createSprite(200,180,10,20)
  back.addImage("water",bg)
  back.scale=.4
  back.height=50

  ship = createSprite(200, 200, 300, 600)
  ship.addAnimation("boat",ship_floating,)
  ship.scale=.3
  back.velocityX=-5
}

function draw() {
  drawSprites();
  if(back.x<0){
    back.x=back.width / 5
  }


}