import models from '../models';

export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Category.create(req.body);
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await models.Category.findOne({ _id: req.query._id })
            if (!reg) {
                res.status(404).send(
                    { message: `Category not found.` }
                )
            }
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    },
    list: async (req, res, next) => {
        try {
            const valor = req.query.valor;
            const reg = await models.Category.find({ $or: [{ 'name': new RegExp(valor, 'i') }, { 'description': new RegExp(valor, 'i') }] }, { createAt: 0 })
                .sort({ 'createAt': -1 });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({ _id: req.body._id },
                { name: req.body.name, description: req.body.description });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    },
    remove: async (req, res, next) => {
        try {
            await models.Category.findByIdAndDelete({ _id: req.body._id });
            res.status(200).send(
                { message: `Category deleted successfully` }
            )
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({ _id: req.body._id }, { state: 1 });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({ _id: req.body._id }, { state: 0 });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    },
}