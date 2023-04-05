/**
 * This is the first file executed in any NestJS project.
 * In this example, we will create modules and controllers here.
 * In the following example, we will split the modules and controllers into separate files.
 */
// To create a module and controllers, import them from 'nestjs'.
// Import Module from nestjs/common.
import { Controller, Module, Get } from "@nestjs/common";
// Import NestFactory from nestjs/core.
import { NestFactory } from "@nestjs/core";

// Create Controller.
// Call the Controller() decorator. That means we are creating a new controller, and the AppController class will serve as a controller inside the application.
@Controller()
// Create a new class called AppController.
class AppController {
  // Call the Get() decorator. That means we are creating a new route handler, and the getRootRoute() method will serve as a route handler inside the application.
  @Get()
  // Handle a GET request to the root route of the application.
  getRootRoute() {
    // Return a string. This message will be shown when we visit the root route of the application.
    return "Hello World!";
  }
}
// Every App needs a module.
//We must pass a configuration option or object when using the Module decorator.
// Inside the configuration object, we must pass an array of controllers.
@Module({
  // Pass an object.
  // That is the controllers’ property. It will list all the controllers we want to register with this module.
  // By that approach, we can register multiple controllers with a single module. Whenever NestJS finds a controller, it will automatically register it with the module by creating a new instance of that controller.
  controllers: [AppController],
})
// Create a new class called AppModule.
// This class will serve as a module inside of the application.
class AppModule {}
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
// We created a new NestJS application.
// We created a new module.
// We created a new controller and told that controller that we had done the module.
// We define the bootstrap function.
//      The bootstrap function creates a new instance of the NestApplication class (this is how to create a new NestJS application).
//      The bootstrap function starts the application on port 3000.
// We call the bootstrap function.

// At this stage, we are creating the project from scratch. We have made this file from scratch. If we want to execute this file, we need to run the following command:
// > npx ts-node-dev src/main.ts
// This command will execute the main.ts file. The 'npx' command will execute the ts-node-dev package. The ts-node-dev package will execute the main.ts file.
// The console will show the following message:
// > Nest application successfully started
// Open the browser and visit the following URL: "localhost:3000". You will see the following message: "Hello World!".
// If there are errors, we must double-check if another application does not use port 3000.
