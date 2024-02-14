const ApiError = require("../error/apiError");
const { Cart, CartDevice } = require("../models/models");

class CartController {
  async create(req, res, next) {
    try {
      const currentUser = req.user.id;

      const cart = await Cart.findOne({ currentUser });

      if (!cart) {
        return next(ApiError.internal("Cart not found"));
      }

      const cartDevices = await CartDevice.findAndCountAll({
        where: { cartId: cart.id },
      });

      let { deviceId, quantity } = req.body;

      // case #1 if cart is empty
      if (!cartDevices.count) {
        const cartDevice = await CartDevice.create({
          deviceId: deviceId,
          quantity: quantity,
          cartId: cart.id,
        });

        return res.json(cartDevice);
      }

      // case #2 if cart is not empty
      cartDevices.rows.filter((cartItem) => cartItem.deviceId === deviceId);

      if (cartDevices.rows.length > 1) {
        return next(
          ApiError.internal(
            "Cart has multiple cart devices with the same device ID"
          )
        );
      }

      // case #3 if new device is not found in the cart
      if (!cartDevices.rows) {
        const cartDevice = await CartDevice.create({
          deviceId: deviceId,
          quantity: quantity,
          cartId: cart.id,
        });

        return res.json(cartDevice);
      }

      // case #4 if new device is already in the cart

      const cartDevice = await CartDevice.update(
        { quantity: cartDevices.rows[0].quantity + quantity },
        {
          where: {
            deviceId: deviceId,
          },
        }
      );

      return res.json(cartDevice);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const currentUser = req.user.id;

      const cart = await Cart.findOne({ currentUser });

      if (!cart) {
        return next(ApiError.internal("Cart not found"));
      }

      const cartDevices = await CartDevice.findAndCountAll({
        where: { cartId: cart.id },
      });

      if (!cartDevices.count) {
        return next(ApiError.internal("Cart is empty"));
      }

      console.log(cartDevices);
      return res.json(cartDevices);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new CartController();
