const Result = require('./Result');

class DataResult extends Result {
  constructor(success, data, message) {
    super(success, message);
    this.data = data;
  }
}

module.exports = DataResult;
