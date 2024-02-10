let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados =[];
let numeroMaximo =3;

function asignarTextoElemento(elemento,texto)
{
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
 let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

console.log(intentos);
 if (numeroDeUsuario===numeroSecreto)
 {
    asignarTextoElemento ("p", `${(intentos===1) ? "Acertaste el número en el primer intento" : `Acertaste en numero en ${intentos} intentos`} `);
 document.getElementById("reiniciar").removeAttribute("disabled");
}
 // El usiario no acerto
 else{
    if(numeroDeUsuario<numeroSecreto)
    {
        asignarTextoElemento ("p", "El número Secreto es mayor");
    }
    else
    {
        asignarTextoElemento ("p", "El número Secreto es menor");
    }
    intentos++;
    limpiarCaja();
 }
    return;
}
function generarNumerSecreto() 
{

    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteaste todos los numeros cierras el juego
    if (listaNumerosSorteados.length==numeroMaximo) {
       
        asignarTextoElemento("p","Ya se asignaron todos los numeros posibles");
        
    }else
    {
    // si el numero generado esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumerSecreto();

        
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   }
}

function limpiarCaja()
{
    document.querySelector("#valorUsuario").value="";

}

function extructurasIniciales() 
{
asignarTextoElemento("h1","Juego del numero secreto");
asignarTextoElemento("p",`Indica un número entre 1 y ${numeroMaximo}`);
numeroSecreto = generarNumerSecreto();
intentos=1;    
}

function reiniciarJuego() {


    //limpiar Caja
    limpiarCaja();
    //Indicar el mensaje de intervalos de numeros
    //Geerar numero aleatorio
    // Reiniciar intentos a 1
    extructurasIniciales();
    
    // Deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
    
}
    extructurasIniciales();

