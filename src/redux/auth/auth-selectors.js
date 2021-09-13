export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getUserEmail = (state) => state.auth.user.email;

export const getIsFetching = (state) => state.auth.isFetching;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
};

export default authSelectors;
