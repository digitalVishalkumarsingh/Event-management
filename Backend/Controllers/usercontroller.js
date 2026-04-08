const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

// ───────── Validation Helper ─────────
const validateUserForm = ({ name, email, phone, password }) => {
  if (!name || !email || !phone || !password) {
    throw new Error("All fields are required");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error("Invalid email format");
  }

  if (!/^\d{10}$/.test(phone)) {
    throw new Error("Phone number must be 10 digits");
  }

  if (!/(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/.test(password)) {
    throw new Error(
      "Password must be 8+ chars with number & special character"
    );
  }
};

// ───────── User Registration ─────────
exports.controlUserRegistration = async (req, res) => {
  try {
    validateUserForm(req.body);

    const { name, email, phone, password } = req.body;

    const existUser = await User.findOne({
      $or: [{ email }, { phone }],
    });

    if (existUser) {
      return res.status(409).json({
        success: false,
        message: "Email or phone already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ───────── User Login ─────────
exports.controlUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = await user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};
