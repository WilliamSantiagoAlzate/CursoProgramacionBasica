var imagenes = [];
imagenes["Cauchin"] = "imagenes/vaca.png";
imagenes["Pokacho"] = "imagenes/pollo.png";
imagenes["Tocinauro"] = "imagenes/cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var pakin of coleccion) {
  pakin.mostrar();
}
