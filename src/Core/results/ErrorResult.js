const Result = require('./Result');

class ErrorResult extends Result {
  constructor(message, statusCode = 400) {
    super(false, message, statusCode);
  }
}

module.exports = ErrorResult;
