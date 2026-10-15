import { Request, Response } from 'express';

export class SalaController {
  public static listarSalas = (_req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      mensaje: 'El listado de salas todavía no está implementado.'
    });
  };

  public static crearSala = (_req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      mensaje: 'El registro de nuevas salas todavía no está implementado.'
    });
  };

  public static actualizarSalaParcial = (req: Request, res: Response): void => {
    const { id } = req.params;

    res.status(501).json({
      success: false,
      mensaje: `La actualización parcial de la sala ${id} todavía no está implementada.`
    });
  };
}