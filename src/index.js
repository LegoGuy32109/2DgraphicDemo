import React from 'react';
import ReactDOM from 'react-dom/client';


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
let pixelSize = 1;
const pixel = function(x,y,c){ctx.fillStyle=c; ctx.fillRect(x*pixelSize,y*pixelSize, pixelSize,pixelSize)}
function drawBorder(color) {
  for (let x = 0; x < c.width / pixelSize; x++) {
    pixel(x, 0, color);
  }
  for (let x = 0; x < c.width / pixelSize; x++) {
    pixel(x, c.height / pixelSize - 1, color);
  }
  for (let y = 0; y < c.height / pixelSize; y++) {
    pixel(0, y, color);
  }
  for (let y = 0; y < c.height / pixelSize; y++) {
    pixel(c.width / pixelSize - 1, y, color);
  }
}

function mandleBrot(scale, xcord, ycord) {
  for (let x = 0; x < c.width; x++) {
    for (let y = 0; y < c.height; y++) {
      let dx = (x - c.width / 2) / scale + xcord;
      let dy = (y - c.height / 2) / scale + ycord;
      let a = dx;
      let b = dy;
      for (let t = 20; t < 200; t++) {
        let d = a * a - b * b + dx;
        b = 2 * (a * b) + dy;
        a = d;
        if (d > 200) {
          pixel(x, y, "rgb(" + t + "," + t * 3 + "," + t * 0.5 + ")");
          break;
        }
      }
    }
  }
}

// mandleBrot(30000, -0.6, 0.62)
mandleBrot(390, -0.3, 0);

// mandleBrot();
// drawBorder("green")