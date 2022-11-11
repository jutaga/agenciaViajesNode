//Todo lo relacionado con las rutas

//Del paquete de express lo importamos
import express from 'express';
import { paginaInicio, paginaViajes, paginaNosotros, paginaTestimonialies, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';
//Extendemos la instancia de express
const router = express.Router();


//Asignamos las rutas al objeto router
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);


router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimonialies);
router.post('/testimoniales', guardarTestimonial);


export default router;