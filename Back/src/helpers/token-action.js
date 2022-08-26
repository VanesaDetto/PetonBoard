const jwt = require("jsonwebtoken");

const createToken = (id, petuser) => {
  return jwt.sign({ id, petuser }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { createToken, verifyToken };
