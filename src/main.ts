import { NestFactory } from '@nestjs/core';
// Moved the 'ValidationPipe' imports to 'src\setup-app.ts'.
import { AppModule } from './app.module';
// Moved the 'cookie-session' imports to 'src\setup-app.ts'.
// Added the 'setupApp' import from 'src\setup-app.ts'.
import { setupApp } from './setup-app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Added the 'setupApp' call.
  await setupApp(app);
  // Moved the 'app.use' and 'app.useGlobalPipes' to 'src\setup-app.ts'.
  await app.listen(3000);
}
bootstrap();
