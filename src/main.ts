/**
 * This is the first file executed in any NestJS project.
 * In this example, we will create modules and controllers here.
 * In the following example, we will split the modules and controllers into separate files.
 */
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

// Summary:
// We moved some code from that file to the app.module.ts and app.controller.ts files.
// We imported the AppModule class from the app.module.ts file.
// Restart the application by using the following command:
// > npx ts-node-dev src/main.ts
// Open the browser and visit the following URL: "localhost:3000". You will see the following message: "Hello World!".