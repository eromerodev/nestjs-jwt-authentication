import * as dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

export interface IEnvironment {
  port: number;
  secretOrKey: string;
  mockApiUrl: string;
}

export const env = (): IEnvironment => ({
  port: PORT ? Number(PORT) : 3000,
  secretOrKey: process.env.JWT_SECRET,
  mockApiUrl: process.env.MOCK_API_URL,
});
