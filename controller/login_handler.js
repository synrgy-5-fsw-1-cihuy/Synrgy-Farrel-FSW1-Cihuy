const model = require("../db/models/index");
const User_login = model.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const registerSuper = async (req, res) => {
  const data = req.body;
  if (data.secret != "akusuper") {
    return res.status(403).send("Forbidden Access! Not a Superadmin!");
  } else {
    try {
      const [user, created] = await User_login.findOrCreate({
        where: {
          email: data.email.toLowerCase(),
        },
        defaults: {
          password: data.password,
          role: "superadmin",
        },
      });
      created
        ? res.status(200).send("Superadmin successfuly created!")
        : res.status(401).send("Email taken");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

const registerAdmin = async (req, res) => {
  const data = req.body;
  if (req.user.role != "superadmin") {
    return res.status(403).send("Forbidden Access! Not a superadmin!");
  } else {
    try {
      const [user, created] = await User_login.findOrCreate({
        where: {
          email: data.email.toLowerCase(),
        },
        defaults: {
          password: data.password,
          role: "admin",
        },
      });
      created
        ? res.status(200).send("Admin successfuly created!")
        : res.status(401).send("Email taken");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

const registerUser = async (req, res) => {
  const data = req.body;
  try {
    const [user, created] = await User_login.findOrCreate({
      where: {
        email: data.email.toLowerCase(),
      },
      defaults: {
        password: data.password,
        role: "user",
      },
    });
    created
      ? res.status(200).send("User successfuly created!")
      : res.status(401).send("Email taken");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getAdmin = async (req, res) => {
  try {
    res.status(200).json(await User_login.findAll());
  } catch (error) {
    res.status(500).send(error);
  }
};

const loginCheck = async (req, res) => {
  const data = req.body;
  const dbData = await User_login.findOne({
    where: {
      email: data.email.toLowerCase(),
    },
  });
  const compare = await bcrypt.compare(
    data.password,
    dbData.dataValues.password
  );
  if (compare === true) {
    const token = jwt.sign(
      {
        email: data.email.toLowerCase(),
        role: dbData.dataValues.role,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    console.log(token);
    res.status(200).send("Logged in successfully 👍");
  } else {
    res.status(400).send("Invalid email or password ❌");
  }
};

const tokenCheck = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = {
  registerSuper,
  registerAdmin,
  registerUser,
  getAdmin,
  loginCheck,
  tokenCheck,
};
