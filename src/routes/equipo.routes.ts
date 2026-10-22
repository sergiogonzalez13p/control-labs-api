import { Router } from 'express';
import loanRoutes from './loan.routes';
import usuarioRoutes from './usuario.routes';
import salaRoutes from './sala.routes';
import equipoRoutes from './equipo.routes';

const router = Router();

router.use('/loans', loanRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/salas', salaRoutes);
router.use('/equipos', equipoRoutes);

export default router;
