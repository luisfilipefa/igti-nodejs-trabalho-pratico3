const Service = require("../models/service.model");
const Pet = require("../models/pet.model");
const Owner = require("../models/owner.model");
const HttpError = require("../errors/HttpError");

const create = async (req, res, next) => {
  try {
    const { description, value, pet_id } = req.body;

    const pet = await Pet.findByPk(pet_id);

    if (!pet) throw new HttpError(404, "Pet not found");

    const owner = await Owner.findByPk(pet.owner_id);

    const service = await Service.create({
      description,
      value,
      pet_id,
      owner_id: owner.id,
    });

    return res.json(service);
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const service = await Service.findByPk(id);

    if (!service) throw new HttpError(404, "Service not found");

    return res.json(service);
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const { owner_id } = req.query;

    let services = [];

    if (owner_id) {
      services = await Service.findAll({ where: { owner_id } });
    } else {
      services = await Service.findAll();
    }

    return res.json(services);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const values = req.body;

    const serviceExists = await Service.findByPk(id);

    if (!serviceExists) throw new HttpError(404, "Service not found");

    const service = await serviceExists.update(values);

    return res.json(service);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const serviceExists = await Service.findByPk(id);

    if (!serviceExists) throw new HttpError(404, "Service not found");

    await serviceExists.destroy();

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
