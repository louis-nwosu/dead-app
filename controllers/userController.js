//import the validator
const { registerValidation, loginValidation } = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const unirest = require("unirest");

module.exports = {
  //sign-up controller
  SignUp: async (req, res) => {
    try {
      //validate the payload
      const { error } = registerValidation(req.body);
      if (error) res.status(400).send(error.details[0].message);
      //check if user already exists
      const userExists = await User.findOne({ email: req.body.email });
      if (userExists)
        return res
          .status(400)
          .send("The email address you provided is already in use");

      //hash the password
      const hashedPassword = await bcrypt.hash(req.body.password);
      //get the users location
      var req = unirest(
        "GET",
        "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"
      );

      req.headers({
        "x-rapidapi-key": "31e8ca8b99msh12ab932fffce7acp180cccjsnabe54f8b98f1",
        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
        useQueryString: true,
      });

      req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
      });
      //create a new user
      const newUser = {
        full_name: `${req.body.firstname} ${req.body.lastname}`,
        email: req.body.email,
        password: hashedPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        location: "",
        ip_address: req.connection.remoteAddress,
        mac_address: "",
        status: "Email_Unverified",
      };
      //save the new user
      const savedUser = await User.save();
      return res.status(200).json(savedUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  //sign-in controller
  SignIn: async (req, res) => {
    try {
      //validate
      const { error } = loginValidation(req.body);
      if (error) res.status(400).send(error.details[0].message);
      //find user
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).send("username or password incorrect");
      //compare password
      const correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!correctPassword)
        return res.status(400).send("username or password incorrect");
      //assign web token
      const token = jwt.sign(
        { email: user.email },
        "jdbfdjfbdjfgalBFDBLFdfYFGEYFvdc34434343b4j3b43j4b3j",
        { expiresIn: "3h" }
      );
      //send back token with user
      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
