export const errors = {
  USER_NOT_FOUND: {
    code: 'USER_NOT_FOUND',
    message: 'User with the specified email was not found.'
  },
  INCORRECT_CREDENTIALS: {
    code: 'INCORRECT_CREDENTIALS',
    message: 'The password you entered is incorrect.'
  },
  ALREADY_REGISTERED: {
    code: 'ALREADY_REGISTERED',
    message: 'User with the specified email already exists.'
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    message: 'The requested URL was not found.'
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    message: 'You do not have permission to perform this action.'
  },
  BAD_REQUEST: {
    code: 'BAD_REQUEST',
    message: 'The request could not be processed due to invalid or missing parameters.'
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    message: 'The requested URL requires user authorization.'
  },
  INTERNAL_SERVER_ERROR: {
    code: 'INTERNAL_SERVER_ERROR'
  },
  PASSWORD_HASH_ERROR: (message: string) => ({
    code: 'PASSWORD_HASH_ERROR',
    message: message
  })
};
