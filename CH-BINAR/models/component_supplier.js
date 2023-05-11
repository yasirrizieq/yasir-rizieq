'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Component_suppliers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Component_suppliers.init({
    supplier_id: DataTypes.INTEGER,
    component_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Component_suppliers',
  });
  return Component_suppliers;
};