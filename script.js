let textoEncriptado = '';
let messaje = document.getElementById('mensaje');
btnEncriptar = document.getElementById('btn-encriptar');
btnDesencriptar = document.getElementById('btn-desencriptar');
labelMensajeEncriptado = document.getElementById('mensaje-encriptado');


let limpiarInput = () => {
    messaje.value = '';
}

let textoValido = (mensaje) => {
    if (mensaje == "") {
        labelMensajeEncriptado.innerText = `No has introducido el texto`;
        return false;
    }
    else if(hayCaracteresEspecialesMayusculas(mensaje)){
        return false;
    }
    return true;
}

let hayCaracteresEspecialesMayusculas = (texto) => {
    const paramns =/[^a-zA-Z\s]/;
    if(paramns.test(texto)){
        labelMensajeEncriptado.innerText = `No puedes introducir caracteres especiales, ni mayusculas`;
        return true;
    }
}

let encriptarTexto = (mensaje) => {
    textoEncriptado='';
    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += mensaje[i];
                break;
        }
    }
    labelMensajeEncriptado.innerText = textoEncriptado;
}

let desencriptarTexto = (mensaje) => {
    textoEncriptado='';
    for (let i = 0; i < mensaje.length; i++) {
        console.log(mensaje[i]+mensaje[i+1]);
        if((mensaje[i]+mensaje[i+1])==="ai") {
                textoEncriptado += 'a';}
        else if((mensaje[i]+mensaje[i+1]+mensaje[i+2]+mensaje[i+3])=='imes'){
            textoEncriptado += 'e';
        }
        else if((mensaje[i]+mensaje[i+1])==='ai'){
            textoEncriptado += 'i';
        }
        else if((mensaje[i]+mensaje[i+1]+mensaje[i+2]+mensaje[i+3])=='ober'){
            textoEncriptado += 'o';
        }
        else if((mensaje[i]+mensaje[i+1]+mensaje[i+2]+mensaje[i+3])=='ufat'){
            textoEncriptado += 'u';
        }
        else{
            console.log('klk');
            textoEncriptado += mensaje[i];
        }
    }
    labelMensajeEncriptado.innerText = textoEncriptado;
}

btnEncriptar.addEventListener('click', e => {
    e.preventDefault();
    if (textoValido(messaje.value)) {
        encriptarTexto(messaje.value);
        limpiarInput();
    }
})

btnDesencriptar.addEventListener('click', e => {
    e.preventDefault();
    if (textoValido(messaje.value)) {
        desencriptarTexto(messaje.value);
        limpiarInput();
    }
})