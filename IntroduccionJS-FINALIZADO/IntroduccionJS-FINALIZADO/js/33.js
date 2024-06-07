async function obtenerEmpleados (){
    const archivo = 'empleados.json';;
    // fetch(archivo)
    //     .then(resultsdo => {
    //         return resultsdo.json();
    //     })
    //     .then (datos => {
    //         // console.log(datos.empleados);

    //         const {empleados} = datos; 
    //         // console.log(empleados);
    //         empleados.forEach( empleado => {
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);
    //             document.querySelector('.contenido\n').textContent += empleado.nombre
    //         });
    //     })
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();