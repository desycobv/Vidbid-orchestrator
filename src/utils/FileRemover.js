const fs = require("fs");

const { logError } = require("../utils/logger/logger");

class FileRemover {
  removeFileSilently(file) {
    try {
      fs.unlinkSync(file.path);
      // file removed
    } catch (err) {
      logError(err);
    }
  }
}

module.exports = new FileRemover();
