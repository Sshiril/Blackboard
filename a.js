//press mouse to draw, press w to clear

let colorlist = ['gold', 'yellow', 'turquoise', 'red', 'blue', 'green', 'purple', 'pink', 'orange', 'white']
let x = 20
let y = 10
let a = 'Small'
let b = 'Small'
let c = 'Colourful'

function setup() 
{
  createCanvas(windowWidth, windowHeight)
  background(2)
}

function keyPressed() {

  //size of eraser
  if (keyCode === UP_ARROW) {
    x = 50;
    a = 'Big'
    print('x = ')
    print(x)
  }
  if (keyCode === DOWN_ARROW) {
    x = 20
    a = 'Small'
    print('x = ')
    print(x)
  }

  //size of pen
  if (keyCode === LEFT_ARROW) {
    if (y <= 20) {
      y = 10
      b = 'Small'
      print('y = ')
      print(y)
    } else {
        y = 20
        b = 'Middle'
        print('y = ')
        print(y)
      }
  }
  if (keyCode === RIGHT_ARROW) {
    if (y >= 20) {
      y = 80
      b = 'Big'
      print('y = ')
      print(y)
    } else {
        y = 20
        b = 'Middle'
        print('y = ')
        print(y)
      }
  }

  //clear screen
  if (keyCode === DELETE) {
    fill('black')
    rect (0, 0, 32767,32767)
  }


  //colour
  if (keyCode === BACKSPACE) {
    colorlist = ['white']
    c = 'White'
  }
  if (keyCode === ENTER) {
    colorlist = ['gold', 'yellow', 'turquoise', 'red', 'blue', 'green', 'purple', 'pink', 'orange', 'white']
    c = 'Colourful'
  }
  if (keyCode === ALT) {
    colorlist = ['green', 'red', 'blue']
    c = 'Primary Colour'
  }
}

function draw() {
  
  //background of words
  fill(2)
  rect(5, 25, 135, 120)
  rect(5, 165, 190, 40)
  rect(5, 225, 270, 100)
  rect(5, 325, 340, 60)
  rect(5, 405, 355, 60)

  //words
  textSize(16)
  fill(255)

  text('Pen Sizes:',20, 40)
  text(b, 20, 60)

  text('Eraser Sizes:', 20, 80)
  text(a, 20, 100)

  text('Colour:', 20, 120)
  text(c, 20, 140)

  text('Click mouse left to draw', 10, 180)
  text('Press shift to erase', 10, 200)

  text('Press ↑ to increase sizes of eraser', 10, 240)
  text('Press ↓ to decrease sizes of eraser', 10, 260)
  text('Press ← to increase sizes of the pen', 10, 280)
  text('Press → to decrease sizes of the pen', 10, 300)
  text('Press Delete to clear the screen', 10, 320)
  text('Press Backspace to change colour to white', 10, 340)
  text('Press Alt to change colour to primary color', 10, 360)
  text('Press Enter to chenge colour to colourful', 10, 380)
  
  text('Eraser may still open after you release shift.', 10, 420)
  text('It is small bug of browsers.', 10, 440)
  text('You can try to switch size of eraser to solve it.', 10, 460)


  if (mouseIsPressed) {

    //Draw
    if (mouseButton === LEFT){
    fill(random(colorlist))
    rect(mouseX, mouseY, y, y)
    }
  } else {
    }

  //Erase
  if (keyCode === SHIFT) {
    fill('black')
    ellipse(mouseX, mouseY, x, x)
  } else {
    }
}

  
