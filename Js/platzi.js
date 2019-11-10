var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var xVaca = 0;
var yVaca = 0;
var xPollo = 0;
var yPollo = 0;
var xCerdo = 0;
var yCerdo = 0;
var xlistaVaca = [];
var ylistaVaca = [];
var xlistaPollo = [];
var ylistaPollo = [];

var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

var mapa = {
  url:"imagenes/tile.png",
  cargaOK:false
}

var vaca = {
  url:"imagenes/vaca.png",
  cargaOK:false
}

var pollo = {
  url:"imagenes/pollo.png",
  cargaOK:false
}

var cerdo = {
  url:"imagenes/cerdo.png",
  cargaOK:false
}

document.addEventListener("keydown", moverCerdo);
var movimiento = 10;

mapa.imagen = new Image();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load", cargarMapa);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarMapa() {
  mapa.cargaOK = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (mapa.cargaOK) {
    papel.drawImage(mapa.imagen, 0, 0);
  }
  if (xCerdo == 0 && yCerdo == 0) {
    for (var i = 0; i < 10; i++) {
      if (vaca.cargaOK) {
        xVaca = aleatorio(0,7) * 60;
        yVaca = aleatorio(0,7) * 60;
        xlistaVaca.push(xVaca);
        ylistaVaca.push(yVaca);
        papel.drawImage(vaca.imagen, xVaca, yVaca);
      }
      if (pollo.cargaOK) {
        xPollo = aleatorio(0,10) * 40;
        yPollo = aleatorio(0,10) * 40;
        xlistaPollo.push(xPollo);
        ylistaPollo.push(yPollo);
        papel.drawImage(pollo.imagen, xPollo, yPollo);
      }
    }
  }else {
    for (var i = 0; i < 10; i++) {
      if (vaca.cargaOK) {
        papel.drawImage(vaca.imagen, xlistaVaca[i], ylistaVaca[i]);
      }
      if (pollo.cargaOK) {
        papel.drawImage(pollo.imagen, xlistaPollo[i], ylistaPollo[i]);
      }
    }
  }
  if (cerdo.cargaOK) {
    if (xCerdo == 0 && yCerdo == 0) {
      xCerdo = 420;
      yCerdo = 430;
    }
    papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
  }
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

function moverCerdo(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      papel.clearRect(0, 0, 500, 500);
      yCerdo -= movimiento;
      correr();
      break;
    case teclas.DOWN:
      papel.clearRect(0, 0, 500, 500);
      yCerdo += movimiento;
      correr();
      break;
    case teclas.LEFT:
      papel.clearRect(0, 0, 500, 500);
      xCerdo -= movimiento;
      correr();
      break;
    case teclas.RIGHT:
      papel.clearRect(0, 0, 500, 500);
      xCerdo += movimiento;
      correr();
      break;
  }
}

function correr(){
  cargarMapa();
  cargarVaca();
  cargarPollo();
  cargarCerdo();
}
