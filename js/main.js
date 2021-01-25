let ubicacionPricipal = window.pageYOffset; //Posición del scroll vertical, siempre va a ser 0 al inicio

//DESPLIEGUE DEL HEADER
window.addEventListener("scroll", function(){ //Evento que se activa cuando hacemos scroll
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPricipal>=desplazamientoActual){ 
        this.document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{ //Si bajamos en la página el menú se oculta
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPricipal = desplazamientoActual; //Después de realizar la comprobacion actualizamos ubicación principal
    //De esta forma si subimos un poco aparece el menú otra vez
})

//MENÚ
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos");
    
})

//ANIMACIONES DE SCROLL
window.addEventListener("scroll",function(){
    let animacion = document.getElementsByClassName("animado");
    let tamañoDePantalla = window.innerHeight/1.5; //tamaño de ventana que cambia al reducir la pantalla, utilizamos el valores más
    //pequeños más lejos y valores más grandes para más cerca activar la animación 
    //hacerlo lo más dinamico posible
    let posicionObj = 0;
    for(var i=0;i<animacion.length;i++){
        posicionObj = animacion[i].getBoundingClientRect().top; //Cuanto más cerca estemos del objeto más pequeño es el valor, hasta
        //0 al encontrarlo
        if(posicionObj < tamañoDePantalla){
            animacion[i].style.visibility = "visible";
            animacion[i].style.animation = 'ease-in animat 1.5s';
        }
    }
})