let textoEncriptado='';
let mensaje = document.getElementById('mensaje');
btnEncriptar = document.getElementById('btn-encriptar');
btnDesencriptar = document.getElementById('btn-desncriptar');
labelMensajeEncriptado=document.getElementById('mensaje-encriptado');


btnEncriptar.addEventListener('click',e =>{
    e.preventDefault();
    encriptarTexto(mensaje.value);
    limpiarInput();
})

let limpiarInput=()=>{
    mensaje.value='';
}

let encriptarTexto=(mensaje)=>{
    switch(mensaje){
        case 'a':
            textoEncriptado+='enter';
            break;
        default:
            textoEncriptado+=mensaje;
            break;
    }

    labelMensajeEncriptado.innerText=textoEncriptado;
}