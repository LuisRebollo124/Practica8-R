window.addEventListener("DOMContentLoaded",function (e){
    let parrafos=document.querySelectorAll("p");
    let quitarS=document.querySelector("#quitarS");
    let tipo=document.querySelector("#tipo");
    let color=document.querySelector("#color");
    let fondo=document.querySelector("#fondo");
    let tamaño=document.querySelector("#tamaño");


    for(let parrafo of parrafos){
        parrafo.addEventListener("click",function (e){
            e.target.classList.toggle("seleccionado");
        });
    }

    quitarS.addEventListener("click",function (e){
        let seleccion=document.querySelectorAll(".seleccionado");
        for(let parrafo of seleccion){
            parrafo.classList.remove("seleccionado");
        }
    });

    color.addEventListener("change",function (e){
        let seleccion=document.querySelectorAll(".seleccionado");
        for(let parrafo of seleccion){
            parrafo.style.color=color.value;
        }
    });

    fondo.addEventListener("change",function (e){
        let seleccionados=document.querySelectorAll(".seleccionado");
        for(let parrafo of seleccionados){
            parrafo.style.backgroundColor=fondo.value;
        }
    });

    tamaño.addEventListener("change",function (e){
        let seleccionados=document.querySelectorAll(".seleccionado");
        for(let parrafo of seleccionados){
            parrafo.style.fontSize=tamaño.value+"pt";
        }
    })

    tipo.addEventListener("change",function (e){
        let seleccionados=document.querySelectorAll(".seleccionado");
        for(let parrafo of seleccionados){
            parrafo.style.fontFamily=tipo.value;
        }
    });


});