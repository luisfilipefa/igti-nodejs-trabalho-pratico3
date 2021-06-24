const HttpError = require("../errors/HttpError");
const Owner = require("../models/owner.model");
const Pet = require("../models/pet.model");

const create = async (req, res, next) => {
  try {
    const { name, type, owner_id } = req.body;

    const ownerExists = await Owner.findByPk(owner_id);

    if (!ownerExists) throw new HttpError(400, "Owner not found");

    const petExists = await Pet.findOne({ where: { name, owner_id } });

    if (petExists) throw new HttpError(409, "Pet already exists");

    const pet = await Pet.create({ name, type, owner_id });

    return res.json(pet);
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const pet = await Pet.findByPk(id);

    if (!pet) throw new HttpError(404, "Pet not found");

    return res.json(pet);
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const { owner_id } = req.query;

    let pets;

    if (owner_id) {
      pets = await Pet.findAll({ where: { owner_id } });
    } else {
      pets = await Pet.findAll();
    }

    return res.json(pets);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const values = req.body;

    const petExists = await Pet.findByPk(id);

    if (!petExists) throw new HttpError(404, "Pet not found");

    const pet = await petExists.update(values);

    return res.json(pet);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const petExists = await Pet.findByPk(id);

    if (!petExists) throw new HttpError(404, "Pet not found");

    await petExists.destroy();

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
