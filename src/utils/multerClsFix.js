const createMulterPromise = requestHandler => {
  return (req, res) => {
    return new Promise((resolve, reject) => {
      requestHandler(req, res, err => {
        if (!err) resolve();
        reject(err);
      });
    });
  };
};
const wrapMulterWithPromise = requestHandler => {
  return async (req, res, next) => {
    try {
      await createMulterPromise(requestHandler)(req, res);
      next();
    } catch (e) {
      next(e);
    }
  };
};

module.exports = wrapMulterWithPromise;
