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

      if (!cartDevices.count) {
        return next(ApiError.internal("Cart is empty"));
      }

      let { deviceId } = req.body;

      const cartDevice = await CartDevice.create({
        deviceId: deviceId,
        cartId: cart.id,
      });

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
