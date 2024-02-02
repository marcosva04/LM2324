function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    if (!validarEmail()){ // Si no es valido el correo
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if (!validaPasswords()){ // si no son válidas las contraseñas
        document.getElementById("campo4").innerHTML = "La constraseña no cumple con los requisitos de longitud o no coincide"
        document.getElementById("campo5").innerHTML = "La constraseña no cumple con los requisitos de longitud o no coincide"
        estanCorrectos = false;
    }

    /* if (!validarDNI()){
        document.getElementById("campo6").innerHTML = ""
    }
    return estanCorrectos; */
}
/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
} 

function validaPasswords(){
    let clave1 = document.getElementById("password").value;
    let clave2 = document.getElementById("password2").value;
    let passwordsOK = true; // Cumple con los requisitos
    if (clave1.length<8 || (clave1!=clave2))
        passwordOK = false;
    
    return passwordsOK;
}

function validarDNI(){
    let letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K']
    var cadena = document.getElementById("dni").value; // DNI
    var numero = parseInt(cadena.substring (0.8)); // Parte numérica
    var letraUsuario = cadena (8); // Letra escrita por el usuario
    var letraReal = letra (numero%23); // Letra "real" del DNI calculada según "fórmula"
    var dniValido = true;
    if (letraUsuario != letraReal) // Si no coincide letras en falso
        dniValido = false;
    return dniValido;
}

/* Esto es una prueba

function validarDNI(){
    let letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K']
    var cadena = document.getElementById("dni").value; // DNI
    var numero = cadena%23;
    var dni = letra [numero.length];
    document.getElementById('dni');
} */