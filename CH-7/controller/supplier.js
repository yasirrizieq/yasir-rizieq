const {Supplier, Component} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const suppliers = await supplier.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: suppliers
            });
        } catch (error) {
            next(err);
        }
    },

    show: async (req, res, next) => {
        try {
            const {supplier_id} = req.params;

            const supplier = await supplier.findOne({
                where: {id: supplier_id}, include: [
                    {
                        model: supplier,
                        as: 'supplier',
                        attributes: ['id', 'name', 'description']
                    }
                ]
            });

            if (!supplier) {
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${supplier_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: supplier
            });
        } catch (error) {
            next(error);
        }
    },

    store: async (req, res, next) => {
        try {
            const {supplier_id, title, description} = req.body;

            if (!supplier_id || !title) {
                return res.status(400).json({
                    status: false,
                    message: 'supplier_id and title is required!',
                    data: null
                });
            }

            const Supplier = await supplier.findOne({where: {id: supplier_id}});
            if (!supplier) {
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${supplier_id}`,
                    data: null
                });
            }

            const supplier = await supplier.create({
                supplier_id: supplier_id,
                title: title,
                description: description
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: supplier
            });
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const {supplier_id} = req.params;

            const updated = await supplier.update(req.body, {where: {id: supplier_id}});

            if (updated[0] == 0) {
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${supplier_id}!`,
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
            const {supplier_id} = req.params;

            const deleted = await supplier.destroy({where: {id: supplier_id}});

            if (!deleted) {
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${supplier_id}!`,
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

