const authService = {
  signup: async ({ fullname, email, password }) => {},
  login: async ({ email, password }) => {
    return {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken'
    };
  },
  logout: async () => {}
};

export default authService;
