const Order = require("../Model/userorder");

// Validate required order fields
const validateOrderForm = (data) => {
  const { Eventname, img, Member, Decoration, Price, Address } = data;
  if (!Eventname || !img || !Member || !Decoration || !Price || !Address) {
    throw new Error("All order fields are required: Eventname, img, Member, Decoration, Price, Address");
  }
};

// Book an order
exports.orderbook = async (req, res) => {
  try {
    validateOrderForm(req.body);

    const { Eventname, img, Member, Decoration, Price, Address } = req.body;

    const newOrder = await Order.create({ Eventname, img, Member, Decoration, Price, Address });

    res.status(201).json({
      success: true,
      message: "Order booked successfully",
      data: newOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: error.message || "An error occurred while booking the order",
    });
  }
};
