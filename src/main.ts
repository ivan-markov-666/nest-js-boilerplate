import { NestFactory } from '@nestjs/core';
// Removed the "ValidationPipe" class from the '@nestjs/common' package.
import { AppModule } from './app.module';
// Removed the "cookieSession" package.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Remove the "app.use" method and remove the "cookieSession" too, because the "cookieSession" was moved to the "app.module.ts" file.
  // The "ValidationPipe" class was moved to the "app.module.ts" file to the "useGlobalPipes" method.
  await app.listen(3000);
}
bootstrap();
