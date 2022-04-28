import pkg from 'pg';
import dotenv from 'dotenv';
import { connectionString } from '../settings';

const {Pool }= pkg;
dotenv.config();

export const pool = new Pool({ connectionString});
// import pkg from 'pg';
// const {Pool } = pkg;