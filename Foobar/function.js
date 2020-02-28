function ejecutar(algunaFuncion, valor){
    algunaFuncion(valor + '...');
}

ejecutar(function(palabra){
    console.log(palabra);
}, 'holo');