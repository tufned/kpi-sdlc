import bcrypt from 'bcrypt';
import { errors } from '../constants/errors.js';

export const getHash = async (plainText: string) => {
  try {
    const saltRounds = 10;
    return bcrypt.hash(plainText, saltRounds);
  } catch (e) {
    throw errors.PASSWORD_HASH_ERROR(e.message);
  }
};

export const compareHashes = async (plainText: string, hash: string) => {
  if (plainText && hash) return bcrypt.compare(plainText, hash);
  else return false;
};
