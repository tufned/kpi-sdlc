import { errors } from '../constants/errors.js';
import { Request, Response, NextFunction } from 'express';
import { EnhancedError } from '../types/common.types.js';

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { status, code, message } = err as EnhancedError;

  console.error(err);

  if (!status && !code) {
    res.status(500).json({
      status: 500,
      code: errors.INTERNAL_SERVER_ERROR.code,
      message
    });
    return;
  }

  res.status(status).json({
    status,
    code,
    message
  });
};

export default errorMiddleware;
