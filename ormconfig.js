var dbConfig = {
  synchronize: false,
  // Added 'migration' to enable migrations from the CLI.
  migrations: ['migrations/*.js'],
  // Added 'cli' to make sure migrations are generated in the correct folder.
  cli: {
    // Location of migration files.
    migrationsDir: 'migrations',
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
    });
    break;
  case 'production':
    break;
  default:
    throw new Error('Unknown environment');
}

module.exports = dbConfig;
