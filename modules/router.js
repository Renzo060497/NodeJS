function route(handle, pathname){
    console.log('A punto de rutear una petición para ' + pathname);
    if (typeof handle[pathname] === 'function') return handle[pathname]();
    else return '404 - No encontrado'
}

exports.route = route;