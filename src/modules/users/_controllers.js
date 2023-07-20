const express = require('express');
const addUser = require('./add-users');
const httpValidator = require('../../shared/http-validator');
const { showUserSchema, patchUserSchema, updatePasswordSchema, deleteUserSchema, postUsersSchema } = require('./_schema');
const listUsers = require('./list-users');
const showUser = require('./show-user');
const editUser = require('./add-users');
const removeUser = require('./remove-users');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUsersSchema);

    const result = await addUser(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUsers = async (req, res, next) => {
  try {
    const result = await listUsers();

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const result = await showUser(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchUserSchema);

    const result = await editUser({ id: req.params.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const updatePassword = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, updatePasswordSchema);

    const result = await editUser({ id: req.params.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUserSchema);

    const result = await removeUser(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postUser,
  getUsers,
  getUser,
  patchUser,
  updatePassword,
  deleteUser
};