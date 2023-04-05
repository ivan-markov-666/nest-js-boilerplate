// Import the Module decorator from the @nestjs/common package.
import { Module } from '@nestjs/common';
// Import the AppController class from the app.controller.ts file.
import { AppController } from './app.controller';
// Declare a @Module() decorator.
@Module({
    // Pass an array of controllers.
    controllers: [AppController],
  })
  // Create and export a new class called AppModule.
  export class AppModule {}