import * as mongoose from 'mongoose';
import env from 'dotenv';

env.config();
const { DATABASE, DB_PASW, DB_NAME } = (await import('../configs/config.js')).config;

const initDB = () => {
  const db: string = DATABASE.replace('<DB_PASW>', DB_PASW).replace('<DB_NAME>', DB_NAME);
  mongoose.connect(db).then(() => {
    console.log('Database Connected!');
  });
};

export default initDB;
