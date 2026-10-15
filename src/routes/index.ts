import { Router } from 'express';
import loanRoutes from './loan.routes';
import usuarioRoutes from './usuario.routes';
import salaRoutes from './sala.routes';

const router = Router();

router.use('/loans', loanRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/salas', salaRoutes);

export default router;