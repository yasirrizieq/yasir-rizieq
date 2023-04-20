const {Product, Component} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const products = await product.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: products
            });
        } catch (error) {
            next(err);
        }
    },

    show: async (req, res, next) => {
        try {
            const {product_id} = req.params;

            const product = await product.findOne({
                where: {id: product_id}, include: [
                    {
                        model: Component,
                        as: 'component',
                        attributes: ['id', 'name', 'description']
                    }
                ]
            });

            if (!product) {
                return res.status(404).json({
                    status: false,
                    message: `can't find product with id ${product_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: product
            });
        } catch (error) {
            next(error);
        }
    },

    store: async (req, res, next) => {
        try {
            const {Component_id, title, description} = req.body;

            if (!Component_id || !title) {
                return res.status(400).json({
                    status: false,
                    message: 'Component_id and title is required!',
                    data: null
                });
            }

            const Component = await Component.findOne({where: {id: Component_id}});
            if (!Component) {
                return res.status(404).json({
                    status: false,
                    message: `can't find Component with id ${Component_id}`,
                    data: null
                });
            }

            const product = await product.create({
                Component_id: Component_id,
                title: title,
                description: description
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: product
            });
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const {product_id} = req.params;

            const updated = await product.update(req.body, {where: {id: product_id}});

            if (updated[0] == 0) {
                return res.status(404).json({
                    status: false,
                    message: `can't find product with id ${product_id}!`,
                    data: null
                });
            }

            return res.status(201).json({
                status: true,
                message: 'success',
                data: null
            });
        } catch (error) {
            next(error);
        }
    },

    destroy: async (req, res, next) => {
        try {
            const {product_id} = req.params;

            const deleted = await product.destroy({where: {id: product_id}});

            if (!deleted) {
                return res.status(404).json({
                    status: false,
                    message: `can't find product with id ${product_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: null
            });
        } catch (error) {
            next(error);
        }
    }
};

