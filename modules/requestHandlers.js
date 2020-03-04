function iniciar(){
    console.log("Manipulador de peticion 'iniciar' ha sido llamado")
    return 'Hola iniciar';
}

function subir(){
    console.log("Manipulador de peticion 'subir' ha sido llamado");
    return 'Hola subir';
}

exports.iniciar = iniciar;
exports.subir = subir;