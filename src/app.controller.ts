// Import the Controller() decorator and the Get() decorator from the @nestjs/common package.
import { Controller, Get } from "@nestjs/common";

// Create Controller.
// Provide '/app' as a prefix for all the routes inside this controller.
@Controller("/app")
// Create and export a new class called AppController.
export class AppController {
  // Create a new Get request handler.
  // Provide '/routeExample' as a route for this request handler.
  @Get("/routeExample")
  // Handle a GET request to the application's '/routeExample' route.
  getRootRoute() {
    // Return a string. This message will be shown when we visit the application's '/routeExample' route.
    return "Hello Route!";
  }
}

// Summary:
// We imported the Controller() decorator and the Get() decorator from the @nestjs/common package.
// We created a new class called AppController.
// We provided '/app' as a prefix for all the routes inside this controller.
// We created a new Get request handler.
// We provided '/routeExample' as a route for this request handler.
// We handled a GET request to the application's '/routeExample' route.
// We returned a string. This message will be shown when we visit the application's '/routeExample' route.

// Open the browser and visit http://localhost:3000/app/routeExample. You should see the message "Hello Route!".

