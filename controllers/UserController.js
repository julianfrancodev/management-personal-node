import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';


export default {
    add: async (req, res, next) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const reg = await models.User.create(req.body);
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
            const reg = await models.User.findOne({ _id: req.query._id })
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
            const reg = await models.User.find({ $or: [{ 'name': new RegExp(valor, 'i') }, { 'email': new RegExp(valor, 'i') }] }, { createAt: 0 })
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
            let pass = req.body.password;

            const reg0 = await models.User.findOne({ _id: req.body._id });

            if (pass != reg0.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);

            }

            const reg = await models.User.findByIdAndUpdate({ _id: req.body._id },
                {
                    name: req.body.name, rol: req.body.rol, document_type: req.body.document_type, document_num: req.body.document_type,
                    address: req.body.address, phone_num: req.body.phone_num, password: req.body.password
                });
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
            await models.User.findByIdAndDelete({ _id: req.body._id });
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
            const reg = await models.User.findByIdAndUpdate({ _id: req.body._id }, { state: 1 });
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
            const reg = await models.User.findByIdAndUpdate({ _id: req.body._id }, { state: 0 });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            let user = await models.User.findOne({ email: req.body.email, state: 1 });

            if (user) {
                let match = await bcrypt.compare(req.body.password, user.password);

                if (match) {
                    let tokenSign = await token.encode(user._id);
                    return res.status(200).send({
                        user,
                        tokenSign
                    })
                } else {
                    res.status(404).send({
                        message: 'Incorrect password'
                    })
                }
            } else {
                res.status(404).send({
                    message: 'The user dont exists'
                })
            }
        } catch (error) {
            res.status(500).send({
                message: `Unexpected Error`
            })
            next(error);
        }
    }
}