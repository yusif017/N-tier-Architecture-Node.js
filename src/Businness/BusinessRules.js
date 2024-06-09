const ErrorResult = require('../Core/results/ErrorResult');
const SuccessResult = require('../Core/results/SuccessResult');

class BusinessRules {
  static run(...rules) {
    for (const rule of rules) {
      if (!rule.success) {
        return new ErrorResult(rule.message);
      }
    }
    return new SuccessResult('All business rules passed');
  }
}

module.exports = BusinessRules;
