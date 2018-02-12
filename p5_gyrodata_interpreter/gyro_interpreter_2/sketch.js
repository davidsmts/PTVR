/**
* @Author: David Schmotz <David>
* @Date:   2017-09-26T08:43:24+02:00
* @Email:  davidschmotz@gmail.com
* @Filename: sketch.js
* @Last modified by:   David
* @Last modified time: 2018-02-02T23:40:16+01:00
*/



var drawCounter = 0;
var lines;
var rectPosition;
var zAngle = -300;
var yAngle = -200;

function preload() {
  var files = ["gyro_data_kopfschuetteln.txt", "gyro_data_1.txt", "gyro_data_3.txt", "gyro_data_4.txt"];
  lines = loadStrings(files[2]);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  background(55);
  rectPosition = createVector(0, 0, 0);
  print(lines);
  //frameRate(1);
}

function draw() {
  background(55);
  ambientLight(255,0,0);
  //directionalLight(250, 250, 250, dirX, -dirY, 0.25);

  var position = splitIntoXYZ(lines[drawCounter])
  rotateX(radians(rectPosition.x += position.x));
  rotateY(radians(rectPosition.y += position.y));
  rotateZ(radians(rectPosition.z += position.z));

  box(16);
  if (drawCounter > 750) {
    rectPosition.x = 0;
    rectPosition.y = 0;
    rectPosition.z = 0;
    drawCounter = 0;
  } else {
    drawCounter += 1;
  }
  line(0,0,0,0,0,100);
  line(0,0,0,0,100,0);
  line(0,0,0,100,0,0);
  line(0,0,0,-100,0,0);
  line(0,0,0,0,-100,0);
}


function splitIntoXYZ(line) {
  var arr = split(line, " ");
  //print(arr);
  return createVector(float(arr[0])*1, float(arr[1])*1,  float(arr[2])*1);
}
