import { Router } from 'express';
import { EquipoController } from '../controllers/equipo.controller';
import { validateEquipoPayload } from '../middlewares/validateEquipo.middleware';

const router = Router();

router.post('/', validateEquipoPayload, EquipoController.registrarEquipo);
router.get('/', EquipoController.listarEquipos);
router.patch('/:id', EquipoController.actualizarEquipoParcial);

export default router;