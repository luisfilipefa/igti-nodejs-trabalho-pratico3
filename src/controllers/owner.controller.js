const HttpError = require("../errors/HttpError");
const Owner = require("../models/owner.model");
const Pet = require("../models/pet.model");

const create = async (req, res, next) => {
  try {
    const { name, phone } = req.body;

    const ownerExists = await Owner.findOne({ where: { name } });

    if (ownerExists) throw new HttpError(409, "Owner already exists");

    const owner = await Owner.create({ name, phone });

    return res.json(owner);
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const owner = await Owner.findByPk(id);

    if (!owner) throw new HttpError(404, "Owner not found");

    return res.json(owner);
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const owners = await Owner.findAll();

    return res.json(owners);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const values = req.body;

    const ownerExists = await Owner.findByPk(id);

    if (!ownerExists) throw new HttpError(404, "Owner not found");

    const owner = await ownerExists.update(values);

    return res.json(owner);
  } catch (error) {
    next(error);
  }
};

// TODO verificar se o proprietário possui algum pet cadastrado
const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const hasPets = await Pet.findAll({ where: { owner_id: id } });

    if (hasPets.length > 0) throw new HttpError(400, "Owner has active pets");

    const ownerExists = await Owner.findByPk(id);

    if (!ownerExists) throw new HttpError(404, "Owner not found");

    await ownerExists.destroy();

    return res.end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  findOne,
  find,
  update,
  destroy,
};
