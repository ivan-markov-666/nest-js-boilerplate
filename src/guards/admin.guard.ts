// Import the 'CanActivate' and 'ExecutionContext' interfaces from the '@nestjs/common' package.
import { CanActivate, ExecutionContext } from '@nestjs/common';

// Create a new class called 'AdminGuard' that implements the 'CanActivate' interface.
export class AdminGuard implements CanActivate {
  // Implement the 'canActivate()' method of the 'CanActivate' interface. This method will be used to determine whether or not a user can access a route.
  canActivate(context: ExecutionContext) {
    // Get the 'request' object from the 'context' object.
    const request = context.switchToHttp().getRequest();
    console.log('Checking admin status for user:', request.currentUser);
    // Check if the 'request' object has a 'CurrentUser' property. If the 'request' object doesn't have a 'CurrentUser' property, it means that the user is not logged in. In this case, return 'false' to prevent the user from accessing the route.
    if (!request.currentUser) {
      // Return 'false' to prevent the user from accessing the route.
      return false;
    }
    // Check if the 'admin' property of the 'CurrentUser' object is set to 'true'. If the 'admin' property of the 'CurrentUser' object is set to 'true', it means that the user is an admin. In this case, return 'true' to allow the user to access the route.
    return request.currentUser.admin;
  }
}
