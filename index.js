//configuramos express
//Del paquete de express lo importamos
import express from 'express';
//agregar "type": "module", la package.json

import router from './routes/index.js';
import db from './config/db.js';




//Ejecutamos express
const app = express();

//Conectar la base de datos
db.authenticate()
    .then( ()=> console.log('Base de datos conectada') )
    .catch( error => console.log(error))


//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
//Next para pasar a la siguiente linea
app.use( (req, res, next)=> {
    const year = new Date().getFullYear();
    res.locals.ActualYear = year;
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//Definir la carpeta public
app.use(express.static('public'));

//Agregar router
//Desde la pagina principal agrega todas las rutas en el router
app.use('/', router);


//Arrancamos el servidor
app.listen(port, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});