const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  token: {
    type: String
  }
}, {
  toJSON: {
    transform: (doc, { _id, name, email }) => ({ _id, name, email })
  }
});

UserSchema.methods.generateAuthToken = async function () {
  if (this.token) {
    return this.token;
  }
  const token = jwt.sign(
    { _id: this._id.toHexString() },
    process.env.JWT_SECRET
  ).toString();
  this.token = token;
  await this.save();
  return token;
};

UserSchema.statics.findByToken = async function (token) {
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    return this.findOne({ _id, token });
  } catch (err) {
    throw err;
  }
};

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      this.password = await bcrypt.hash(this.password, 8);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

UserSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw {
      errors: {
        email: {
          message: "User not found."
        }
      }
    };
  } else {
    if (await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      throw {
        errors: {
          email: {
            message: "Incorrect password."
          }
        }
      };
    }
  }
};

module.exports = mongoose.model("User", UserSchema);
