class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() {
  var entregado = [];
  var dato = document.getElementById("dinero");
  dinero = dato.value;
  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      }
      else {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor,papeles));
      dinero -= (bi.valor * papeles);
    }
  }
  if (dinero > 0) {
    r.innerHTML = "Soy un cajero pobre y no tengo todo ese dinero :(";
  }
  else {
    for (var e of entregado) {
      i = 0;
      if (e.cantidad > 0) {
        mostrarDiero(e.valor, e.cantidad);
        while (i <= 4) {
          if (caja[i].valor == e.valor) {
            caja[i].cantidad -= e.cantidad;
          }
          i += 1;
        }
      }
    }
  }
  r.innerHTML = "Su saldo actual es de $" + saldo() + " Pesos";
}

var caja = [];
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 10));

var dinero = 0;
var div = 0;
var papeles = 0;

var r = document.getElementById("resultado");
r.innerHTML = "Su saldo actual es de $" + saldo() + " Pesos";
var b = document.getElementById("retirar");
b.addEventListener("click", entregarDinero);

var cincomil = document.getElementById("cincomil");
var diezmil = document.getElementById("diezmil");
var veintemil = document.getElementById("veintemil");
var cincuentamil = document.getElementById("cincuentamil");
var cienmil = document.getElementById("cienmil");

function mostrarDiero(val, cat) {
  if (val == 5) {
    for (var i = 1; i <= cat; i++) {
      cincomil.innerHTML += "<img src=" + "imagenes/cincomil.jpg" + ">";
    }
  } else if (val == 10) {
    for (var i = 1; i <= cat; i++) {
      diezmil.innerHTML += "<img src=" + "imagenes/diezmil.jpg" + ">";
    }
  } else if (val == 20) {
    for (var i = 1; i <= cat; i++) {
      veintemil.innerHTML += "<img src=" + "imagenes/veintemil.jpg" + ">";
    }
  } else if (val == 50) {
    for (var i = 1; i <=cat; i++) {
      cincuentamil.innerHTML += "<img src=" + "imagenes/cincuentamil.jpg" + ">";
    }
  } else if (val == 100) {
    for (var i = 1; i <=cat; i++) {
      cienmil.innerHTML += "<img src=" + "imagenes/cienmil.jpg" + ">";
    }
  }
}

function saldo() {
  var miDinero = 0;
  for (var i of caja) {
    miDinero += i.cantidad * i.valor;
  }
  return miDinero;
}
