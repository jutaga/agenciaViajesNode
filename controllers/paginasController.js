import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => { //req - lo que enviamos : res - la respuesta de express

    //Consultar 3 viajes del modelo Viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }))
    promiseDB.push(Testimonial.findAll({ limit: 3 }))

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    }); //poner el nombre del elemento PUG y agregar variables
}

const paginaViajes = async (req, res) => {

    //Consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    }); //poner el nombre del elemento PUG y agregar variables
}

const paginaTestimonialies = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        }); //poner el nombre del elemento PUG y agregar variables
    } catch (error) {
        console.log(error.message);
    }

}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })

    } catch (error) {
        console.log(error.message);
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonialies,
    paginaDetalleViaje
}