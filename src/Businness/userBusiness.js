const { createUser } = require('../DataAccsess/userDataAccess');
const SuccessDataResult = require('../Core/results/SuccessDataResult');
const ErrorDataResult = require('../Core/results//ErrorDataResult');
const SuccessResult = require('../Core/results/SuccessResult');
const ErrorResult = require('../Core/results/ErrorResult');
const BusinessRules = require('./BusinessRules');
const User = require('../Entity/User');

const isEmailUnique = async (email) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new ErrorResult('Email is already in use');
  }
  return new SuccessResult();
};

const registerUser = async (userData) => {
  const ruleCheck = BusinessRules.run(
    await isEmailUnique(userData.email)
  );

  if (!ruleCheck.success) {
    return ruleCheck;
  }

  try {
    const user = await createUser(userData);
    return new SuccessDataResult(user, 'User registered successfully', 201);
  } catch (err) {
    return new ErrorDataResult(null, 'User registration failed', 500);
  }
};

module.exports = { registerUser };
