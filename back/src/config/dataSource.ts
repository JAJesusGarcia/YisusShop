import { DataSource } from 'typeorm';
import { DATABASE_URL } from './envs'; // Importamos la URL completa de la base de datos
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Order } from '../entities/Order';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: DATABASE_URL, // Usamos la URL completa
  synchronize: true, // Sincroniza las entidades con la base de datos
  logging: false,
  ssl: {
    rejectUnauthorized: false, // Para evitar problemas de SSL en producción
  },
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
});
