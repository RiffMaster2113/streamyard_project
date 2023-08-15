import User from "../modals/User.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//library to encrypt password
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { username, email, password } = new User(req.body);

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has bee ");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, ...otherDetails } = user._doc;
    res
    //to store token in cookie
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
