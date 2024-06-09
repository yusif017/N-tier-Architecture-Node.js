const Result = require('./Result');

class SuccessResult extends Result {
  constructor(message, statusCode = 200) {
    super(true, message, statusCode);
  }
}

module.exports = SuccessResult;
