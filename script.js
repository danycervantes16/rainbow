function cotiza() {
    var name1 = document.forms["cotizador"]["fname"].value;
    var phone1 = document.forms["cotizador"]["fphone"].value;
    var email1 = document.forms["cotizador"]["femail"].value;
    var cp1 = document.forms["cotizador"]["fcp"].value;
    var service1 = document.getElementById("fservice").value;
    var pieces1 = document.forms["cotizador"]["fpieces"].value;
    id="id_";
    var form1 = {
        Nombre : name1,
        Teléfono : phone1,
        Correo : email1,
        CP : cp1,
        Servicio : service1,
        Piezas : pieces1
    };
    // console.log(phone1,parseInt(phone1),phone1.toString())
    var b=0;
    for( x in form1){
        var a;
        a=vali(form1[x],x,id);
        b +=a;
    }
    if (b == 0 ) {
        document.getElementById("result").innerHTML = "GRACIAS EN BREVE NOS COMUNICAREMOS CONTIGO";
    }
}
function vali(val,x,id) {
    var err;
    if (val == "") {
        document.getElementById(id.concat(x)).innerHTML = "Ingresa tu " + x;
        err = 1;
    } else {
        document.getElementById(id.concat(x)).innerHTML = "";
        err = 0;
    }
    return err;
}
function limit(element, max) {
    if(element.value.length >= max) {
        element.value = element.value.substr(0, max);
    }
}