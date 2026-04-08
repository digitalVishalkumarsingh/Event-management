const mongoose = require("mongoose");
const { VENDOR_SERVICES } = require("../utils");


const vendorStoreSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    storeName: {
      type: String,
      required: true,
      trim: true,
    },

    services: {
      type: [String],
      enum: VENDOR_SERVICES,
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },

    priceRange: {
      min: Number,
      max: Number,
    },

    phone: {
      type: String,
      match: [/^\d{10}$/, "Phone must be 10 digits"],
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VendorStore", vendorStoreSchema);
