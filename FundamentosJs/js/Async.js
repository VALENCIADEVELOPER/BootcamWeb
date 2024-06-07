function DescargarClientes(){
    return new Promise(resolve =>{
        console.log(`Descargando clientes... espere...`);

        setTimeout(()=> {
            resolve (`Los clientes fueron descargados`);
        },5000);
    })
}

function DescargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log(`Descagando Pedidos... espere ///`);
    });
    setTimeout(() =>{
        resolve('Los pedidos fueron descargados');
    },3000);
}

async function app(){
    try{
        // const resultado = await DescargarClientes();
        // const pedidos = await DescargarUltimosPedidos();
        // console.log(resultado);
        const resultado = await Promise.all([DescargarClientes(), DescargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);

    }catch(error){
        console.log(error);
    }
}

app();