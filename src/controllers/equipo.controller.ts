import { Request, Response } from 'express';

export class EquipoController {
  public static registrarEquipo = (_req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      mensaje: 'El registro de equipos todavía no está implementado.'
    });
  };

  public static listarEquipos = (_req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      mensaje: 'El listado de equipos todavía no está implementado.'
    });
  };

  public static actualizarEquipoParcial = (req: Request, res: Response): void => {
    const { id } = req.params;

    res.status(501).json({
      success: false,
      mensaje: `La actualización parcial del equipo ${id} todavía no está implementada.`
    });
  };
}