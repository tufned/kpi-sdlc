const tokenService = {
  generateTokens: (payload: unknown) => {
    const accessToken = 'accessToken';
    const refreshToken = 'refreshToken';

    return {
      accessToken,
      refreshToken
    };
  },
  removeRefreshToken: () => {}
};

export default tokenService;
