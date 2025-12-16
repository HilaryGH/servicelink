const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
    },
    whatsapp: {
      type: String,
      trim: true,
    },
    telegram: {
      type: String,
      trim: true,
    },
    insuranceProfileLink: {
      type: String,
      trim: true,
    },
    governmentId: {
      type: String, // Store file path or URL
      trim: true,
    },
    country: {
      type: String,
      default: "Ethiopia",
      trim: true,
    },
    userType: {
      type: String,
      enum: ["Individual User", "Service Provider"],
      default: "Individual User",
    },
    membershipLevel: {
      type: String,
      enum: ["Standard Member", "Premium Member", "VIP Member", "Basic Provider", "Premium Provider", "VIP Provider"],
      default: "Standard Member",
    },
    // Service Provider specific fields
    companyName: {
      type: String,
      trim: true,
    },
    serviceType: {
      type: String,
      trim: true,
    },
    businessStatus: {
      type: String,
      trim: true,
    },
    leadership: {
      type: String,
      enum: ["Women Led", "Non Women Led"],
    },
    ownership: {
      type: String,
      enum: ["Women Owned", "Non Women Owned"],
    },
    city: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    branches: [{
      city: String,
      location: String,
    }],
    license: {
      type: String, // File path or URL
      trim: true,
    },
    tradeRegistration: {
      type: String, // File path or URL
      trim: true,
    },
    serviceCentrePhotos: [{
      type: String, // Array of file paths or URLs
    }],
    introVideo: {
      type: String, // File path or URL
      trim: true,
    },
    whwCard: {
      type: String, // File path or URL
      trim: true,
    },
    taxIdentificationNumber: {
      type: String,
      trim: true,
    },
    bankAccounts: [{
      bank: String,
      accountNumber: String,
    }],
    servicePriceList: {
      type: String, // File path or URL
      trim: true,
    },
    consent: {
      type: Boolean,
      required: [true, "You must consent to the terms"],
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "super_admin", "marketing_team", "customer_support"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const User = mongoose.model("User", userSchema);

module.exports = User;

