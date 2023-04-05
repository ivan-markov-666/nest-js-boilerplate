// Import the Controller() decorator and the Get() decorator from the @nestjs/common package.
import { Controller, Get } from "@nestjs/common";

// Create Controller.
// Call the Controller() decorator. That means we are creating a new controller, and the AppController class will serve as a controller inside the application.
@Controller()
// Create and export a new class called AppController.
export class AppController {
  // Call the Get() decorator. That means we are creating a new route handler, and the getRootRoute() method will serve as a route handler inside the application.
  @Get()
  // Handle a GET request to the root route of the application.
  getRootRoute() {
    // Return a string. This message will be shown when we visit the root route of the application.
    return "Hello World!";
  }
}