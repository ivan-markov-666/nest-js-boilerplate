import { NestFactory } from '@nestjs/core';
// Import ValidationPipe from the @nestjs/common package.
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Added ValidationPipe to the global pipes.
  app.useGlobalPipes(
    // Created a new ValidationPipe with whitelist option set to true.
    new ValidationPipe({
      // Whitelist is used to allow only the properties defined in the DTO.
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
