// Import NestFactory from nestjs/core.
import { NestFactory } from "@nestjs/core";
// Import the AppModule class from the app.module.ts file.
import { AppModule } from "./app.module";

// Create a new function called bootstrap. That function will be responsible for creating a new NestJS application. The function’s name is not essential, but NestJS uses the 'bootstrap' name by default.
async function bootstrap() {
  // Create a new NestJS application. That creates an instance of the NestApplication class.
  const app = await NestFactory.create(AppModule);
  // Start the application on port 3000.
  await app.listen(3000);
}
// Call the bootstrap function.
bootstrap();