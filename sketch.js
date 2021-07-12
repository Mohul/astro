var astronaut,bathAnimation,backdrop,back_img,brush_Animation,gym_Animation,eatAnimation,bathAnimation,move



function preload(){
  bathAnimation = loadAnimation("bath1.png","bath2.png")
  brush_Animation = loadAnimation("brush.png")
  gym_Animation = loadAnimation("gym1.png","gym2.png","gym1.png","gym2.png","gym1.png","gym2.png","gym1.png","gym12.png","gym11.png")

  eatAnimation = loadAnimation("eat1.png","eat2.png","eat1.png","eat2.png","eat1.png","eat2.png","drink1.png",)
  bathAnimation = loadAnimation("bath1.png","bath2.png","bath1.png","bath2.png")
  


  back_img = loadImage("iss.png")

  instruction = loadImage("Capture.PNG")

 
}

function setup() {

  createCanvas(500,500); 


  


  backdrop = createSprite(200,200)
  backdrop.addImage(back_img)
  backdrop.scale = 0.12

  astronaut = createSprite(200,200)
  astronaut.addAnimation("brushing",brush_Animation)
  astronaut.scale = 0.05

  inst = createSprite(100,50)
  inst.addImage(instruction) 
}

function draw() {
  background(255);



  edges =  createEdgeSprites();

  astronaut.bounceOff(edges[0])
  astronaut.bounceOff(edges[1])
  astronaut.bounceOff(edges[2])
  astronaut.bounceOff(edges[3])

 
  

  brush();
  drawSprites();
}

function brush() {

  if(keyDown("UP_ARROW")){

    astronaut.addAnimation("brushing",brush_Animation)
    astronaut.changeAnimation("brushing",brush_Animation)
  }

  if(keyDown("DOWN_ARROW")){

    astronaut.addAnimation("gyming", gym_Animation);
    astronaut.changeAnimation("gyming", gym_Animation);
    astronaut.y = 300
  }

  if(keyDown("LEFT_ARROW")){

    astronaut.addAnimation("eating", eatAnimation);
    astronaut.changeAnimation("eating", eatAnimation);
    astronaut.y = 350
    
  }

  if(keyDown("RIGHT_ARROW")){

    astronaut.addAnimation("bathing", bathAnimation);
    astronaut.changeAnimation("bathing", bathAnimation);
    astronaut.x = 400
  }
 astronaut.setCollider("rectangle",1,1)
 //astronaut.debug = true

 if(keyDown("m")){
  astronaut.velocityY=-9
  astronaut.velocityX=8

 }

 
 if(keyWentUp("m")){
  astronaut.velocityY=0
  astronaut.velocityX=0
 
 }

 if(keyWentDown("m")){
  astronaut.velocityY=9
  astronaut.velocityX=-8
  
 }


      
}


    



