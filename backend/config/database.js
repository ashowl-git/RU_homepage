const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'eantec_research',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: true,
      underscored: false,
      freezeTableName: true
    }
  }
);

// 데이터베이스 연결 테스트
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL 데이터베이스 연결 성공');
  } catch (error) {
    console.error('❌ PostgreSQL 연결 실패:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, testConnection };