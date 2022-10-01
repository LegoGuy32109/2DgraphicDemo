import React from "react";
import ReactDOM from "react-dom/client";

function This() {
  const [showBorder, setShowBorder] = React.useState(true);
  const [showMandleZoomed, setShowMandleZoomed] = React.useState(false);

  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 50, 50);
  }
  img.src = "./wow.jpeg";
  
  const pixel = function (x, y, c, p = 1) {
    ctx.fillStyle = c;
    ctx.fillRect(x * p, y * p, p, p);
  };

  function drawBorder(color, pixelSize) {
    for (let x = 0; x < c.width / pixelSize; x++) {
      pixel(x, 0, color, pixelSize);
    }
    for (let x = 0; x < c.width / pixelSize; x++) {
      pixel(x, c.height / pixelSize - 1, color, pixelSize);
    }
    for (let y = 0; y < c.height / pixelSize; y++) {
      pixel(0, y, color, pixelSize);
    }
    for (let y = 0; y < c.height / pixelSize; y++) {
      pixel(c.width / pixelSize - 1, y, color, pixelSize);
    }
  }

  function mandleBrot(scale, xcord, ycord) {
    for (let x = 0; x < c.width; x++) {
      for (let y = 0; y < c.height; y++) {
        pixel(x, y, "black");
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

  showMandleZoomed ? mandleBrot(30000, -0.6, 0.62) : mandleBrot(390, -0.3, 0);
  
  if (showBorder) {
    drawBorder("red", 10);
  }
  return (
    <>
      <h1>Canvas Demo</h1>
      <button onClick={() => setShowBorder((prevVal) => !prevVal)}>
        Toggle Border
      </button>
      <button onClick={() => setShowMandleZoomed((prevVal) => !prevVal)}>
        Toggle Zoomed Mandlebrot set
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <This />
  </React.StrictMode>
);
