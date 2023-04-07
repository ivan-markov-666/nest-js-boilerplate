import { NestFactory } from '@nestjs/core';
// "ValidationPipe" is imported from "@nestjs/common".
import { ValidationPipe } from '@nestjs/common';
import { ExampleModule } from './example/example.module';

async function bootstrap() {
  const app = await NestFactory.create(ExampleModule);
  // "app.useGlobalPipes" is used to apply a global pipe to the application.
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
