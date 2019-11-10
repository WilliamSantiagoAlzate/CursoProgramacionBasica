var texto=document.getElementById("textoLineas");
var esquinas=document.getElementById("textoEsquinas");
var boton=document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho=d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas=parseInt(texto.value);
  var esquina=parseInt(esquinas.value);
  var colorcito;
  var inicio,final;

  for (var i = 1; i <= esquina; i++) {
    var l=0;
    while (l<lineas) {
      if (l<lineas*0.70) {
        colorcito="yellow"
      } else if (l<lineas*0.85) {
        colorcito="blue"
      } else {
        colorcito="red"
      }
      inicio=(ancho/lineas)*l;
      final=(ancho/lineas)*(l+1);
      if (i==1) {
        dibujarLinea(colorcito,0,inicio,final,300);
      }else if(i==2) {
        dibujarLinea(colorcito,300,300-inicio,300-final,0);
      }else if (i==3) {
        dibujarLinea(colorcito,0,300-inicio,final,0);
      }else if (i==4) {
        dibujarLinea(colorcito,300,inicio,300-final,300);
      }
      l+=1;
    }
  }

  dibujarLinea("black",0,0,0,300);
  dibujarLinea("black",0,0,300,0);
  dibujarLinea("black",300,0,300,300);
  dibujarLinea("black",0,300,300,300);
}
