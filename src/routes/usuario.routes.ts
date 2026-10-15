import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';

const router = Router();

router.get('/', UsuarioController.obtenerUsuarios);
router.post('/', UsuarioController.registrarUsuario);
router.get('/:id', UsuarioController.obtenerUsuarioPorId);
router.patch('/:id', UsuarioController.actualizarUsuarioParcial);
router.delete('/:id', UsuarioController.eliminarUsuarioLogico);

export default router;