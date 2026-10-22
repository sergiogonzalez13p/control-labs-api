import { Request, Response, NextFunction } from 'express';
import { ICreateUsuarioDTO } from '../dtos/usuario.dto';

const isCreateUsuarioDTO = (
  value: unknown
): value is ICreateUsuarioDTO => {
  if (
    typeof value !== 'object' ||
    value === null ||
    Array.isArray(value)
  ) {
    return false;
  }

  const usuario = value as Record<string, unknown>;

  return (
    typeof usuario.nombre === 'string' &&
    usuario.nombre.trim() !== '' &&
    typeof usuario.correo === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo) &&
    typeof usuario.contrasena === 'string' &&
    usuario.contrasena.trim() !== ''
  );
};

export const validateUsuarioPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateUsuarioDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Los datos del usuario son inválidos.'
    });
    return;
  }

  next();
};