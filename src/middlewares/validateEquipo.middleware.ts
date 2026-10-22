import { Request, Response, NextFunction } from 'express';
import { ICreateEquipoDTO } from '../dtos/equipo.dto';

const isCreateEquipoDTO = (
  value: unknown
): value is ICreateEquipoDTO => {
  if (
    typeof value !== 'object' ||
    value === null ||
    Array.isArray(value)
  ) {
    return false;
  }

  const equipo = value as Record<string, unknown>;

  return (
    typeof equipo.codigoInventario === 'string' &&
    equipo.codigoInventario.trim() !== '' &&
    typeof equipo.numeroPC === 'number' &&
    Number.isInteger(equipo.numeroPC) &&
    equipo.numeroPC > 0 &&
    typeof equipo.tipoEquipo === 'string' &&
    equipo.tipoEquipo.trim() !== '' &&
    typeof equipo.marca === 'string' &&
    equipo.marca.trim() !== '' &&
    typeof equipo.modelo === 'string' &&
    equipo.modelo.trim() !== '' &&
    typeof equipo.estado === 'string' &&
    equipo.estado.trim() !== '' &&
    typeof equipo.codigoAmbiente === 'string' &&
    equipo.codigoAmbiente.trim() !== ''
  );
};

export const validateEquipoPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateEquipoDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Los datos del equipo son inválidos.'
    });
    return;
  }

  next();
};
