import React from 'react';
import ReactDOM from 'react-dom/client';


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
let pixelSize = 30;
const pixel = function(x,y,c){ctx.fillStyle=c; ctx.fillRect(x*pixelSize,y*pixelSize, pixelSize,pixelSize)}

pixel(3, 3)
pixel(3, 2, "red")

function drawBorder(){
  for(let x=0; x<c.width; x++){
    pixel(x, 0, "black")
  }
}

