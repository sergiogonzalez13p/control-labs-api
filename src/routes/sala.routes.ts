import { Router } from 'express';
import { SalaController } from '../controllers/sala.controller';
import { validateSalaPayload } from '../middlewares/validateSala.middleware';

const router = Router();

router.get('/', SalaController.listarSalas);
router.post('/', validateSalaPayload, SalaController.crearSala);
router.patch('/:id', SalaController.actualizarSalaParcial);

export default router;