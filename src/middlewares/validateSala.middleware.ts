import { Request, Response, NextFunction } from 'express';
import { ICreateSalaDTO } from '../dtos/sala.dto';

const isCreateSalaDTO = (value: unknown): value is ICreateSalaDTO => {
  if (
    typeof value !== 'object' ||
    value === null ||
    Array.isArray(value)
  ) {
    return false;
  }

  const sala = value as Record<string, unknown>;

  return (
    typeof sala.codigoAmbiente === 'string' &&
    sala.codigoAmbiente.trim() !== '' &&
    typeof sala.nombreAmbiente === 'string' &&
    sala.nombreAmbiente.trim() !== '' &&
    typeof sala.tipoAmbiente === 'string' &&
    sala.tipoAmbiente.trim() !== '' &&
    typeof sala.bloque === 'string' &&
    sala.bloque.trim() !== '' &&
    typeof sala.capacidadMaxima === 'number' &&
    Number.isInteger(sala.capacidadMaxima) &&
    sala.capacidadMaxima > 0
  );
};

export const validateSalaPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateSalaDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Los datos del ambiente de formación son inválidos.'
    });
    return;
  }

  next();
};