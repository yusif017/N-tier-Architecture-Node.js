const DataResult = require('./DataResult');

class SuccessDataResult extends DataResult {
  constructor(data, message, statusCode = 200) {
    super(true, data, message);
    this.statusCode = statusCode;
  }
}

module.exports = SuccessDataResult;
