function cotiza() {
    var name1 = document.forms["cotizador"]["fname"].value;
    var phone1 = document.forms["cotizador"]["fphone"].value;
    var email1 = document.forms["cotizador"]["femail"].value;
    var cp1 = document.forms["cotizador"]["fcp"].value;
    var service1 = document.getElementById("fservice").value;
    var pieces1 = document.forms["cotizador"]["fpieces"].value;
    var error_name = validate_name(name1)
    var error_phone = validate_phone(phone1)
    var error_email = validate_email(email1)
    var error_cp = validate_cp(cp1)
    var error_service = validate_service(service1)
    var error_pieces = validate_pieces(pieces1)
    let suma = error_name + error_phone + error_email + error_cp + error_service + error_pieces
    if (suma == 0) {
        document.getElementById("result").innerHTML = "GRACIAS, EL COSTO POR ESTE SERVICIO ES DE $500 EN BREVE NOS COMUNICAREMOS CONTIGO";
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
function validate_name(str) {
    let error = 0;
    if (str == "") {
        document.getElementById("id_Nombre").innerHTML = "Ingresa tu nombre";
        error = 1;
    } else if (str != "") {
        error = have_number(str);
        if(error == 1){
            document.getElementById("id_Nombre").innerHTML = "Ingresa un nombre valido";
        } else {
            document.getElementById("id_Nombre").innerHTML = "";
        }
    }
    return error;
}
function have_number(str) {
    let i;
    let num = "0123456789";
    let err = 0;
    let len = num.length;
    for (i=0;i<len;i++){
        if(str.indexOf(num.charAt(i))!= -1) {
            err = 1;
            break;
        } else {
            err = 0;
        }
    }
    return err;
}
function validate_email(str) {
    let error = 0;
    if (str == "") {
        document.getElementById("id_Correo").innerHTML = "Ingresa tu correo";
        error = 1;
    } else if (str != "") {
        error = right_email(str);
        if(error == 1){
            document.getElementById("id_Correo").innerHTML = "Ingresa un correo valido";
        } else {
            document.getElementById("id_Correo").innerHTML = "";
        }
    }
    return error;
}
function right_email(valor) {
    let err=0;
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)){
        err = 0
    } else {
        err = 1
    }
    return err;
}
function validate_phone(str) {
    let error = 0;
    if (str == "") {
        document.getElementById("id_Telefono").innerHTML = "Ingresa tu teléfono";
        error = 1;
    } else {
        if (str.length < 10 || str.length > 10 ) {
            document.getElementById("id_Telefono").innerHTML = "Ingresa tu teléfono a 10 dig";
            error = 1;
        } else {
            document.getElementById("id_Telefono").innerHTML = "";
            error = 0;
        }
    }
    return error;
}
function validate_cp(str) {
    let error = 0;
    if (str == "") {
        document.getElementById("id_CP").innerHTML = "Ingresa tu C.P.";
        error = 1;
    } else {
        if (str.length < 5 || str.length > 5) {
            document.getElementById("id_CP").innerHTML = "Ingresa tu C.P. a 5 dig";
            error = 1;
        } else {
            document.getElementById("id_CP").innerHTML = "";
            error = 0;
        }
    }
    return error;
}
function validate_service(str) {
    let error = 0;
    if (str == "") {
        document.getElementById("id_Servicio").innerHTML = "Elige alguno de nuestros Servicios";
        error = 1;
    } else {
        document.getElementById("id_Servicio").innerHTML = "";
        error = 0;
    }
    return error;
}
function validate_pieces(str) {
    let error = 0;
    if (str == 0) {
        document.getElementById("id_Piezas").innerHTML = "Ingrese # de piezas";
        error = 1;
    } else {
        document.getElementById("id_Piezas").innerHTML = "";
        error = 0;
    }
    return error;
}
function limit(element, max) {
    if(element.value.length >= max) {
        element.value = element.value.substr(0, max);
    }
}