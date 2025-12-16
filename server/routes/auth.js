const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { sendWelcomeEmail } = require("../utils/emailService");

const router = express.Router();

// JWT Secret from environment variable
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

// Register Route (Individual User)
router.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      whatsapp,
      telegram,
      insuranceProfileLink,
      governmentId,
      country,
      userType,
      membershipLevel,
      consent,
    } = req.body;

    // Check if this is a service provider registration
    if (userType === "Service Provider" || req.body.companyName) {
      return res.status(400).json({
        success: false,
        message: "Please use /api/auth/register-service-provider endpoint for service provider registration",
      });
    }

    // Validation
    if (!firstName || !lastName || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide first name, last name, email, password, and phone",
      });
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        message: "You must consent to the terms and conditions",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      whatsapp: whatsapp || "",
      telegram: telegram || "",
      insuranceProfileLink: insuranceProfileLink || "",
      governmentId: governmentId || "",
      country: country || "Ethiopia",
      userType: userType || "Individual User",
      membershipLevel: membershipLevel || "Standard Member",
      consent: consent || false,
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send welcome email (non-blocking)
    sendWelcomeEmail(
      user.email,
      `${user.firstName} ${user.lastName}`,
      user.userType
    ).catch((err) => {
      console.error("Failed to send welcome email:", err);
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Error registering user",
      error: error.message,
    });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: error.message,
    });
  }
});

// Register Service Provider Route
router.post("/register-service-provider", async (req, res) => {
  try {
    const {
      companyName,
      serviceType,
      businessStatus,
      leadership,
      ownership,
      email,
      phone,
      whatsapp,
      telegram,
      city,
      password,
      license,
      tradeRegistration,
      serviceCentrePhotos,
      introVideo,
      whwCard,
      insuranceProfileLink,
      taxIdentificationNumber,
      location,
      branches,
      bankAccounts,
      servicePriceList,
      country,
      consent,
    } = req.body;

    // Validation
    if (!companyName || !serviceType || !email || !password || !phone || !city) {
      return res.status(400).json({
        success: false,
        message: "Please provide company name, service type, email, password, phone, and city",
      });
    }

    if (!leadership || !ownership) {
      return res.status(400).json({
        success: false,
        message: "Please provide leadership and ownership information",
      });
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        message: "You must consent to the terms and conditions",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Create new service provider user
    const user = new User({
      firstName: companyName, // Using company name as firstName for service providers
      lastName: "", // Service providers don't have last name
      email,
      password,
      phone,
      whatsapp: whatsapp || "",
      telegram: telegram || "",
      insuranceProfileLink: insuranceProfileLink || "",
      country: country || "Ethiopia",
      userType: "Service Provider",
      membershipLevel: "Basic Provider",
      consent: consent || false,
      // Service Provider specific fields
      companyName,
      serviceType,
      businessStatus: businessStatus || "",
      leadership,
      ownership,
      city,
      location: location || "",
      branches: branches || [],
      license: license || "",
      tradeRegistration: tradeRegistration || "",
      serviceCentrePhotos: serviceCentrePhotos || [],
      introVideo: introVideo || "",
      whwCard: whwCard || "",
      taxIdentificationNumber: taxIdentificationNumber || "",
      bankAccounts: bankAccounts || [],
      servicePriceList: servicePriceList || "",
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send welcome email (non-blocking)
    sendWelcomeEmail(
      user.email,
      user.companyName,
      user.userType
    ).catch((err) => {
      console.error("Failed to send welcome email:", err);
    });

    res.status(201).json({
      success: true,
      message: "Service provider registered successfully",
      token,
      user: {
        id: user._id,
        companyName: user.companyName,
        name: user.companyName,
        email: user.email,
        role: user.role,
        userType: user.userType,
      },
    });
  } catch (error) {
    console.error("Service provider registration error:", error);
    res.status(500).json({
      success: false,
      message: "Error registering service provider",
      error: error.message,
    });
  }
});

module.exports = router;

