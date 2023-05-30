function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
  if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent ="texto encriptado con éxito";
      parrafo.textContent = "";
    } else {
      tituloMensaje.textContent ="Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa en texto que deseas encriptar o desencriptar";
     alert("Debes ingresar algún texto");
    }

}

function desencripar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");


    let textoCifrado = texto 
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
     
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent ="texto Desencriptado con éxito";
        parrafo.textContent = "";
    } else {
       tituloMensaje.textContent ="Ningún mensaje fue encontrado";
       parrafo.textContent = "Ingresa en texto que deseas encriptar o desencriptar";
       alert("Debes ingresar algún texto");
     
    }

}

    