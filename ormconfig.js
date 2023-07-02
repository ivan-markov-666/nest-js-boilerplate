// Added 'dbConfig' variable to store database configuration.
var dbConfig = {
  // Added 'synchronize' option to sync database schema.
  synchronize: false,
};

// Added 'switch' statement to set database configuration based on environment.
switch (process.env.NODE_ENV) {
  // Added 'development' environment.
  case 'development':
    // Added 'Object.assign()' method to copy properties from 'dbConfig' to 'dbConfig'.
    Object.assign(dbConfig, {
      // Added 'type' option to set database type.
      type: 'sqlite',
      // Added 'database' option to set database file path.
      database: 'db.sqlite',
      // Added 'entities' option to set entity files.
      entities: ['**/*.entity.js'],
    });
    // Added 'break' statement to stop 'switch' statement.
    break;
  // Added 'test' environment.
  case 'test':
    // Added 'Object.assign()' method to copy properties from 'dbConfig' to 'dbConfig'.
    Object.assign(dbConfig, {
      // Added 'type' option to set database type.
      type: 'sqlite',
      // Added 'database' option to set database file path.
      database: 'test.sqlite',
      // Added 'entities' option to set entity files.
      entities: ['**/*.entity.ts'],
    });
    // Added 'break' statement to stop 'switch' statement.
    break;
  // Added 'production' environment.
  case 'production':
    // Added 'break' statement to stop 'switch' statement.
    break;
  // Added 'default' environment.
  default:
    // Because we don't need anything to do in the 'default' environment, we just throw an error if it's not one of the above.
    throw new Error('Unknown environment');
}

// Export the 'dbConfig' variable.
module.exports = dbConfig;
