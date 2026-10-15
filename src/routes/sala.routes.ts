import { Router } from 'express';
import { SalaController } from '../controllers/sala.controller';

const router = Router();

router.get('/', SalaController.listarSalas);
router.post('/', SalaController.crearSala);
router.patch('/:id', SalaController.actualizarSalaParcial);

export default router;