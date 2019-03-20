import { sequelize, Sequelize } from 'sequelize';
import Product from './product';

const Sale = sequelize.define('sale', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    allowNull: false,  
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  product_id: {
    allowNull: false,  
    
    references: {
      model: Product,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
});

export default Sale;