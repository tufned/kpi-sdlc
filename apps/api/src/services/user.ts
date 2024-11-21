import User from '../models/userModel.js';
import { createError } from '../utils/errorsHelpers.js';
import { UserInterface } from '../types/models/user.interface.js';
import { errors } from '../constants/errors.js';

const userService = {
  getUserByEmail: async (email: UserInterface['email']) => {
    const user = await User.findOne({ email }).select('+password').lean().exec();

    if (!user) return null;
    return user;
  },

  createUser: async ({ fullname, email, password }: UserInterface) => {
    const duplicateUser = await userService.getUserByEmail(email);

    if (duplicateUser) throw createError(409, errors.ALREADY_REGISTERED);

    return await User.create({
      fullname,
      email,
      password
    });
  }
};

export default userService;
