const DataResult = require('./DataResult');

class ErrorDataResult extends DataResult {
  constructor(data, message, statusCode = 400) {
    super(false, data, message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorDataResult;
