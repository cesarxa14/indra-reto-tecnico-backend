import 'dotenv/config';

// TODO: pasarlo a variable de entorno

export const STARWARS_API_URL = 'https://swapi.py4e.com/api';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_NAME = process.env.DB_NAME || 'starwars';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'chelseafc11';
export const DB_PORT = process.env.DB_PORT || '3306';
export const DB_USERNAME = process.env.DB_USERNAME || 'root';