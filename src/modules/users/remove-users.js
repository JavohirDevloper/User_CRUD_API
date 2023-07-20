const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const removeUser = async ({ id }) => {
  const existing = await User.findById(id);

  if (!existing) {
    throw new NotFoundError("User not found");
  }

  return User.findByIdAndRemove(id);
};

module.exports = removeUser;
