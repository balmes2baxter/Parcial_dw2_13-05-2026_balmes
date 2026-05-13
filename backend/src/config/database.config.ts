import { TypeOrmModuleOptions } from '@nestjs/typeorm';

type SupportedDatabase = 'postgres' | 'mysql';

function getDatabaseType(value?: string): SupportedDatabase {
  if (value === 'postgres' || value === 'mysql') {
    return value;
  }

  return 'postgres';
}

function toNumber(value: string | undefined, fallback: number): number {
  const parsedValue = Number.parseInt(value ?? '', 10);

  return Number.isNaN(parsedValue) ? fallback : parsedValue;
}

function toBoolean(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined) {
    return fallback;
  }

  return value === 'true';
}

export function getDatabaseConfig(): TypeOrmModuleOptions {
  const databaseType = getDatabaseType(process.env.DB_TYPE);
  const isMysql = databaseType === 'mysql';

  return {
    type: databaseType,
    host: process.env.DB_HOST ?? 'localhost',
    port: toNumber(process.env.DB_PORT, isMysql ? 3307 : 5432),
    username: process.env.DB_USERNAME ?? 'parcial_user',
    password: process.env.DB_PASSWORD ?? 'parcial_pass',
    database: process.env.DB_NAME ?? 'parcialdb',
    autoLoadEntities: true,
    synchronize: toBoolean(process.env.DB_SYNCHRONIZE, true),
  };
}
