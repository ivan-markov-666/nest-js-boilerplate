import { NestFactory } from '@nestjs/core';

// Imported the ExampleModule.
import { ExampleModule } from './example/example.module';

async function bootstrap() {
  // Created an instance of the ExampleModule.
  const app = await NestFactory.create(ExampleModule);
  await app.listen(3000);
}
bootstrap();
