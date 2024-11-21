import { errors } from '../constants/errors.js';
import { EnhancedError } from '../types/common.types.js';

const { UNAUTHORIZED, FORBIDDEN, NOT_FOUND, BAD_REQUEST } = errors;

export const createError = (
  status: number,
  errorInfo: { message: string; code: string }
): EnhancedError => {
  const err = new Error(errorInfo.message) as EnhancedError;
  err.status = status;
  err.code = errorInfo.code;

  return err;
};

export const createUnauthorizedError = () => {
  return createError(401, UNAUTHORIZED);
};

export const createForbiddenError = () => {
  return createError(403, FORBIDDEN);
};

export const createNotFoundError = () => {
  return createError(404, NOT_FOUND);
};

export const createBadRequestError = () => {
  return createError(400, BAD_REQUEST);
};
