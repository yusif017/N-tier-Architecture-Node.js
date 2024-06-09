const { registerUser } = require('../../Businness/userBusiness');

const register = async (req, res) => {
  const result = await registerUser(req.body);
  res.status(result.statusCode).json(result);
};

module.exports = { register };
