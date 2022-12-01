const express = require("express");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const encryptPassword = async (req, res, next) => {
  const data = req.body;
  const hashed = await bcrypt.hash(data.password, saltRounds);
  data.password = hashed;
  next();
  return;
};

module.exports = encryptPassword;
