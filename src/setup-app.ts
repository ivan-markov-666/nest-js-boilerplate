// Import the 'ValidationPipe' from '@nestjs/common'.
import { ValidationPipe } from '@nestjs/common';
// Assign the 'cookie-session' module to a variable.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

// Create a function called 'setupApp' that takes in an 'app' parameter.
export const setupApp = async (app: any) => {
  // Call the 'app.use' method and pass in the 'cookieSession' middleware.
  app.use(
    // Pass in an object with the 'keys' property set to an array with a single string.
    cookieSession({
      // the 'keys' property is used to encrypt the cookie.
      keys: ['asdf'],
    }),
  );
  // Call the 'app.useGlobalPipes' method and pass in a new instance of the 'ValidationPipe'.
  app.useGlobalPipes(
    // Pass in an object with the 'whitelist' property set to 'true'.
    new ValidationPipe({
      // the 'whitelist' property is used to strip away any properties that are not defined in the DTO.
      whitelist: true,
    }),
  );
};
