import { Router } from 'express';
import loanRoutes from './loan.routes';
import usuarioRoutes from './usuario.routes';

const router = Router();

router.use('/loans', loanRoutes);
router.use('/usuarios', usuarioRoutes);

export default router;