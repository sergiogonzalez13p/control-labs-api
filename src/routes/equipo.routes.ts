import { Router } from 'express';
import { EquipoController } from '../controllers/equipo.controller';

const router = Router();

router.post('/', EquipoController.registrarEquipo);
router.get('/', EquipoController.listarEquipos);
router.patch('/:id', EquipoController.actualizarEquipoParcial);

export default router;