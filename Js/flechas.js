var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var colorcito;
var movimiento = 10;
var correcto;
var xi, yi, xf, yf;
var mouseX = 532;
var mouseY = 91;

cuadrito.addEventListener("mousemove", movermouse);
function movermouse(evento){
  if (correcto) {
    xf = evento.screenX - mouseX + 0.01;
    yf = evento.screenY - mouseY + 0.01;
    dibujarLinea(colorcito, xi, yi, xf, yf, papel);
    xi = evento.screenX - mouseX;
    yi = evento.screenY - mouseY;
    //console.log(xi, xf, yi, yf);
  }
}

cuadrito.addEventListener("mousedown", clickmouse);
function clickmouse(evento){
  correcto = true;
  colorcito = "red"
  xi = evento.screenX - mouseX;
  yi = evento.screenY - mouseY;
  xf = evento.screenX - mouseX + 0.01;
  yf = evento.screenY - mouseY + 0.01;
}

cuadrito.addEventListener("mouseup", soltarmouse);
function soltarmouse(evento){
  correcto = false;
}

function dibujarTeclado(evento){
  colorcito = "blue"
  //console.log(evento);
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
      y -= movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
      y += movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
      x -= movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
      x += movimiento;
      break;
  }
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
