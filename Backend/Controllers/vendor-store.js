const VendorStore = require("../Model/vendor-store");
const { VENDOR_SERVICES } = require("../utils");

// ───────── Create Vendor Store ─────────
exports.createVendorStore = async (req, res) => {
  try {
    const { storeName, services, city } = req.body;

    if (!storeName || !services?.length || !city) {
      return res.status(400).json({
        success: false,
        message: "Store name, services & city required",
      });
    }

    // Validate services
    const invalid = services.filter(s => !VENDOR_SERVICES.includes(s));
    if (invalid.length) {
      return res.status(400).json({
        success: false,
        message: `Invalid services: ${invalid.join(", ")}`,
      });
    }

    const store = await VendorStore.create({
      owner: req.user.id, // from auth middleware
      ...req.body,
    });

    res.status(201).json({
      success: true,
      data: store,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create vendor store",
    });
  }
};

// ───────── Get All Vendor Stores ─────────
exports.getVendorStores = async (req, res) => {
  try {
    const { service, city } = req.query;

    const filter = {};
    if (service) filter.services = service;
    if (city) filter.city = city;

    const stores = await VendorStore.find(filter).populate("owner", "name email");

    res.json({ success: true, data: stores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to retrieve vendor stores" });
  }
};
