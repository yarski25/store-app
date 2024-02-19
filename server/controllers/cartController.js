const ApiError = require("../error/apiError");
const { Cart, CartDevice } = require("../models/models");

class CartController {
  async create(req, res, next) {
    try {
      // get current logged user id
      const currentUser = req.user.id;

      // get cart id related to the current user id
      const cart = await Cart.findOne({ currentUser });

      if (!cart) {
        return next(ApiError.internal("Cart not found"));
      }

      // get requested device id and its quantity from body
      let { deviceId, quantity } = req.body;

      // get all devices with current device id related to the current cart id
      const { count, rows } = await CartDevice.findAndCountAll({
        where: { cartId: cart.id, deviceId: deviceId },
      });

      // case #1 if no devices with current device id in the cart
      if (count === 0) {
        const cartDevice = await CartDevice.create({
          deviceId: deviceId,
          quantity: quantity,
          cartId: cart.id,
        });

        return res.json(cartDevice);
      }

      if (count > 1) {
        return next(
          ApiError.internal(
            "Cart has multiple cart devices with the same device ID"
          )
        );
      }

      // case #2 if device with current device id is already in the cart

      const cartDevice = await CartDevice.update(
        { quantity: rows[0].quantity + quantity },
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

  async delete(req, res, next) {
    try {
      // get current logged user id
      const currentUser = req.user.id;

      // get cart id related to the current user id
      const cart = await Cart.findOne({ currentUser });

      if (!cart) {
        return next(ApiError.internal("Cart not found"));
      }

      // get requested device id and its quantity from body
      let { deviceId, quantity } = req.body;

      // get all devices with current device id related to the current cart id
      const { count, rows } = await CartDevice.findAndCountAll({
        where: { cartId: cart.id, deviceId: deviceId },
      });

      if (count === 0) {
        return next(
          ApiError.internal(`Cart device ${deviceId} is already deleted`)
        );
      }

      if (count > 1) {
        return next(
          ApiError.internal(
            "Cart has multiple cart devices with the same device ID"
          )
        );
      }

      if (quantity > rows[0].quantity) {
        return next(
          ApiError.internal(
            "Quantity to delete exceeds quantity related to the device"
          )
        );
      }

      // case #1 if quantity equals to quantity in db
      if (quantity === rows[0].quantity) {
        const cartDevice = await CartDevice.destroy({
          where: {
            deviceId: deviceId,
          },
        });

        return res.json(cartDevice);
      }

      // case #2 if quantity to delete less than quantity in db
      const cartDevice = await CartDevice.update(
        { quantity: rows[0].quantity - quantity },
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

      if (!cartDevices.rows.length) {
        return next(ApiError.internal("Cart is empty"));
      }

      return res.json(cartDevices);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new CartController();
