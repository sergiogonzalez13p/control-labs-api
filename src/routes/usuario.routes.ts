import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { validateUsuarioPayload } from '../middlewares/validateUsuario.middleware';

const router = Router();

router.get('/', UsuarioController.obtenerUsuarios);
router.post('/', validateUsuarioPayload, UsuarioController.registrarUsuario);
router.get('/:id', UsuarioController.obtenerUsuarioPorId);
router.patch('/:id', UsuarioController.actualizarUsuarioParcial);
router.delete('/:id', UsuarioController.eliminarUsuarioLogico);

export default router;