alert("Bienvenidos ala paagina web de carlos html css y javascript");
var nombre = "carlos";
var matricula="S1907443";

var concatenacion = nombre + " " + matricula;

document.write(nombre);
document.write(matricula);

function MuestraNombre(nombre,matricula){
   var MisDatos= `
    <h1>Datos del desarrollador web</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi matricula es: ${matricula}</h3>
    `;
    return MisDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML=MuestraNombre("Carlos Lopez Amaztalli","ZS19017443");
}
 imprimir();

 var nombres=['1','2','3','4'];

 for(i=0;1<nombres.length;i++){
     document.write(`${nombres[i]}</br>`);
 }