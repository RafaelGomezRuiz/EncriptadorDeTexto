let textoEncriptado = '';
let messaje = document.getElementById('mensaje');
btnEncriptar = document.getElementById('btn-encriptar');
btnDesencriptar = document.getElementById('btn-desencriptar');
btnCopiar = document.getElementById('btn-copiar');

labelMensajeEncriptado = document.getElementById('mensaje-encriptado');



let limpiarInput = () => {
    messaje.value = '';
}

let textoValido = (mensaje) => {
    if (mensaje == "") {
        labelMensajeEncriptado.innerText = `No has introducido el texto`;
        btnCopiar.style.display='none';
        return false;
    }
    else if(hayCaracteresEspecialesMayusculas(mensaje)){
        btnCopiar.style.display='none';
        return false;
    }
    return true;
}

let hayCaracteresEspecialesMayusculas = (texto) => {
    const paramns =/[^a-zA-Z0-9\s]/;
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
    labelMensajeEncriptado.innerText = `${textoEncriptado}`;
}

let desencriptarTexto = (mensaje) => {
    let textoDesencriptado = mensaje
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    labelMensajeEncriptado.innerText = `${textoDesencriptado}`;
}

    const copiarTextoEncriptado = async () => {
        try {
        await navigator.clipboard.writeText(labelMensajeEncriptado.innerText);
        console.log('Content copied to clipboard');
        } catch (err) {
        console.error('Failed to copy: ', err);
        }
    }

btnEncriptar.addEventListener('click', e => {
    e.preventDefault();
    if (textoValido(messaje.value)) {
        encriptarTexto(messaje.value);
        limpiarInput();
        btnCopiar.style.display="block"
    }
})

btnDesencriptar.addEventListener('click', e => {
    e.preventDefault();
    if (textoValido(messaje.value)) {
        desencriptarTexto(messaje.value);
        limpiarInput();
        btnCopiar.style.display="block"
    }
})

btnCopiar.addEventListener('click',copiarTextoEncriptado);

addEventListener("DOMContentLoaded",(event)=>{
    btnCopiar.style.display='none';
})