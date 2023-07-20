const { NotFoundError } = require("../../shared/errors");
const User = require("./User");
const bcrypt = require("bcryptjs");

const editUser = async ({ id, ...changes }) => {
  const existing = await User.findById(id);

  if (!existing) {
    throw new NotFoundError("User not found");
  }

  let order = {};

  if (changes.password) {
    order.password = await bcrypt.hash(changes.password, 10);
  }

  return await User.findByIdAndUpdate(id, { ...changes, ...order });
};

module.exports = editUser;
