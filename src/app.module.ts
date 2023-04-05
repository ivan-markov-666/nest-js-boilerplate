// Import the Module decorator from the @nestjs/common package.
import { Module } from '@nestjs/common';
// Import the AppController class from the app.controller.ts file.
import { AppController } from './app.controller';
// Every App needs a module.
//We must pass a configuration option or object when using the Module decorator.
// Inside the configuration object, we must pass an array of controllers.
@Module({
    // Pass an object.
    // That is the controllers’ property. It will list all the controllers we want to register with this module.
    // By that approach, we can register multiple controllers with a single module. Whenever NestJS finds a controller, it will automatically register it with the module by creating a new instance of that controller.
    controllers: [AppController],
  })
  // Create and export a new class called AppModule.
  // This class will serve as a module inside of the application.
  export class AppModule {}