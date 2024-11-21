import userService from './user.js';
import { UserInterface } from '../types/models/user.interface.js';
import { createError } from '../utils/errorsHelpers.js';
import { errors } from '../constants/errors.js';
import { compareHashes, getHash } from '../utils/hashHelpers.js';
import tokenService from './token.js';

const authService = {
  signup: async (user: UserInterface) => {
    const passwordHash = await getHash(user.password);
    const createdUser = await userService.createUser({ ...user, password: passwordHash });
    return createdUser;
  },

  login: async ({ email, password }: Omit<UserInterface, 'fullname'>) => {
    const foundUser = await userService.getUserByEmail(email);
    if (!foundUser) throw createError(401, errors.USER_NOT_FOUND);

    const checkedPassword = await compareHashes(password, foundUser.password);
    if (!checkedPassword) throw createError(401, errors.INCORRECT_CREDENTIALS);

    const { _id, fullname } = foundUser;
    const tokens = tokenService.generateTokens({ id: _id, fullname });

    return tokens;
  },

  logout: async () => {
    tokenService.removeRefreshToken();
  }
};

export default authService;
