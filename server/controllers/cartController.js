const ApiError = require("../error/apiError");
const { Cart, CartDevice } = require("../models/models");

class CartController {
  // async create(req, res, next) {
  //   try {
  //     const user = await User.create({ email, password: hashPassword, role });
  //     const cart = await CartDevice.create({ userId: user.id });

  //     const device = await Device.create({
  //       name,
  //       price,
  //       brandId,
  //       typeId,
  //       img: fileName,
  //     });

  //     if (info) {
  //       info = JSON.parse(info);
  //       info.forEach((i) => {
  //         DeviceInfo.create({
  //           title: i.title,
  //           description: i.description,
  //           deviceId: device.id,
  //         });
  //       });
  //     }

  //     return res.json(device);
  //   } catch (e) {
  //     next(ApiError.badRequest(e.message));
  //   }
  // }

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
