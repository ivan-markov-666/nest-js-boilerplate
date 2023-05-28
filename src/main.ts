import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// Add the 'cookie-session' and assign it to a variable called 'cookieSession'.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add the 'cookieSession' middleware to the application.
  app.use(
    // The 'cookieSession' middleware takes an object with a 'keys' property.
    cookieSession({
      // The 'keys' property is an array of strings.
      keys: ['asdf'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
