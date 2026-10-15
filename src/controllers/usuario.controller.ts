import { Request, Response } from 'express';

export class UsuarioController {
  public static obtenerUsuarios = (_req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      mensaje: 'El listado de usuarios todavía no está implementado.'
    });
  };

  public static registrarUsuario = (_req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      mensaje: 'El registro de usuarios todavía no está implementado.'
    });
  };

  public static obtenerUsuarioPorId = (req: Request, res: Response): void => {
    const { id } = req.params;

    res.status(501).json({
      success: false,
      mensaje: `La consulta del usuario ${id} todavía no está implementada.`
    });
  };

  public static actualizarUsuarioParcial = (req: Request, res: Response): void => {
    const { id } = req.params;

    res.status(501).json({
      success: false,
      mensaje: `La actualización parcial del usuario ${id} todavía no está implementada.`
    });
  };

  public static eliminarUsuarioLogico = (req: Request, res: Response): void => {
    const { id } = req.params;

    res.status(501).json({
      success: false,
      mensaje: `La eliminación lógica del usuario ${id} todavía no está implementada.`
    });
  };
}