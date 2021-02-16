var botonClickeado = false;

function cambiarNombre() {
    if (botonClickeado ) {
        return 
    }else {
        botonClickeado = true;
    }
    window.prompt('Enter your Email');
  
    document.getElementById("button-yellow").innerHTML = "Thanks for your email";
    document.getElementById("button-yellow").disabled = true;
    
}