//Yasser Lachhab
//Pascal Huynh
//Web and Effects, wed sect.
//Pressur and performence (Interactive Assigment)
//link: <iframe src="https://openprocessing.org/sketch/1882721/embed/" width="400" height="400"></iframe>


//Press the little circle in order to make it move
//The story is that the player is the boss managing an unstable individual circle in order to make it perform. The more pressure is put on the circle, the more it goes mad. Untile it is finally left alone to do whatever it pleases. When the player gives it some space it is like a vacation to breath and rest for a bit. That section isn't seen since the circle isn't seen by its boss (or player). Then the cycle begins again. The cycle is just pressur/stress that keeps building again and again in anything basically.

let x = 20
let y = 54
let anger = 0
let siz= 20
let minSiz= 0
let maxSiz= 0
let spee= 6
let a = 0
let img;
let clicks= 0
let backcolor=250
let highlight = 50

function preload() {
  img = loadImage('titan.png');
}


function setup() {
  createCanvas(1200, 1000);

  
}

function draw() {                                                                              //this is the interactive BACKGROUND
  frameRate(spee)                     // this is the frame rate control

      background(216-anger*2,217-anger*2, backcolor+random(15)-anger*3)

                                                                //Each one of these blocks of code is  the "graph" coloumn composed of data ( e.g. wed:  8hrs sleep_ 18hrs awake_143lbs)
      fill(255/(18/8)-random(0,50),0,255-anger)
      circle(200,18*10+mouseY/20,143/2+random(0,143/2))
      circle(200+mouseX/20,600+mouseY/20,143)
      fill(200,255)
      circle(200+mouseX/20,600+mouseY/20,143/2+random(0,143/2))
      fill(255/(18/8),0,255-anger)
      rect(200-143/2/2+random(0,1),0,143/2+random(0,1),180+mouseY/20)
      circle(200,18*10+mouseY/20,143/2+random(0,4))
      line(0,random(8*10,18*10),200,18*10+mouseY/20);

                                                              //Each one of these blocks of code is  the "graph" coloumn composed of data ( e.g. mon: 10hrs sleep_ 15hrs awake_146.6lbs)
      fill(255/(15/10),0,255-anger)
      rect(400-146.6/2/2,0,146.6/2,150 + mouseY/20)
      circle(400,15*10 + mouseY/20,146.6/2)
      line(200,18*10 + mouseY/20,400,15*10 + mouseY/20);

                                                              //Each one of these blocks of cde is  the "graph" coloumn composed of data ( e.g. tue:  8hrs sleep_ 15:15 awake_147.4lbs)
      fill(255/(15/8),0,255-anger)
      rect(600-147.4/2/2,0,147.4/2,(15+1/4)*10 + mouseY/20)
      circle(600,(15+1/4)*10 + mouseY/20,147.4/2)
      line(400,15*10 + mouseY/20,600,(15+1/4)*10 + mouseY/20);

                                                              //Each one of these blocks of code is  the "graph" coloumn composed of data ( e.g. wed:  6hrs sleep_ 14hrs awake_145.8lbs)
      fill(255/(18/8)-random(0,50),0,255-anger)
      circle(800,140 + mouseY/20,145.8/2+random(0,145.8/2))
      circle(800 + mouseX/20,600 + mouseY/20,145.8)
      fill(200,255)
      circle(800 + mouseX/20,600 + mouseY/20,145.8/2+random(0,145.8/2))
      fill(255/(14/6),0,255-anger)
      rect(800-145.8/2/2,0,145.8/2,140 + mouseY/20)
      circle(800,14*10 + mouseY/20,145.8/2+random(0,4))
      line(600,(15+1/4)*10 + mouseY/20,800,14*10 + mouseY/20);

                                                              //Each one of these blocks of code is  the "graph" coloumn composed of data ( e.g. thu:  9hrs sleep_ 17:30 awake_145lbs)
      fill(255/(17.5/9),0,255-anger)
      rect(1000-145/2/2,0,145/2,(17+1/2)*10 + mouseY/20)
      circle(1000,(17+1/2)*10 + mouseY/20,145/2)
      line(800,14*10 + mouseY/20,1000,(17+1/2)*10 + mouseY/20);

      line(1000,(17+1/2)*10 + mouseY/20,1200,random(5*10,18*10));
  
  fill(255,255,0)
  circle(x, y, highlight+a+10+random(21));    // this is just the highlight at the begining that guides the player to click the little circle
  fill(anger,0,0);                             // anger controlling red
  circle(x, y, siz+a+10);                     //draw circle at random coordinates every frame
  imageMode(CENTER);                          //Puts an mad/angry in front of the circle the line of code below plays with its siz and position
  image(img,x,y,siz-10+a,siz-10+a);
  if (clicks <= 8){                                                              //shows the player what to interact with in a text format if the green circle does not make it obvious
    text("<==Mouse click this black circle blob to make him move.", x + 20 + (-mouseX/100 + random(siz)), y )
    textFont("times new roman")
    textSize(20 + clicks)
  }
  if (clicks >= 10){                                                            //tells rhe player to Press Space to restart the calm state of the interactive "game"
    backcolor= backcolor - 20
    textFont("times new roman")
    textSize(20 + clicks)
    text("Give Ur Guy Some SPAAACE!!! He gonna blow on u", width/4 + mouseX/5 + random(siz),height/4 + mouseY/5 + random(siz))
  }
  
  if (clicks >= 13){
    text("PRESS SPACE keybar on your keyboard... please!", width/4 + mouseX/5 ,height/4 + mouseY/5)
  }
  if (anger >= 300){                                                             // if the counter (anger) gets above 300, a prompt appears
    text("Hmm, try giving them some space now, too angry", width/2,height/2)
  }
  a= random(minSiz,maxSiz)
}

function mouseClicked(){
  if (mouseX >= (x-siz+10) && mouseX <= (x+siz+10))                 // if mouse is clicked on/around circle. it’s anger, size, and framerate goes up
  {
    anger = anger + 15
    siz = siz + 10
    minSiz= minSiz + 0.5
    maxSiz= (maxSiz + 0.5) * 1.5
    spee = spee + 1
    x = random(1200)
    y = random(800)
    clicks= clicks + 1

  }
  if (clicks >= 5){                      //plays with the background
    highlight=0
    backcolor= backcolor - 20
  }
      
}
  
function keyPressed() {                  //restarts the whole thing if and only if (iff) the space bar is pressed
  if (key == " "){
    anger = 0
    siz = 20
    spee = 2
    minSiz= 0
    maxSiz= 0
    a= 0
    backcolor= 255
    clicks= 0
    highlight = 30
  }
}
