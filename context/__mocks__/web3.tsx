export const injectedWeb3 = {
  isAuthorized: () =>
    new Promise((res, rej) => {
      res(true);
    }),
};
