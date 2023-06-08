// Purpose: NestJS guard for authentication. Import 'canActivate' and 'ExecutionContext' from NestJS common.
import { CanActivate, ExecutionContext } from '@nestjs/common';

// Define the 'AuthGuard' class.
export class AuthGuard implements CanActivate {
  // Implement the canActivate method, used to determine if a user is authenticated.
  canActivate(context: ExecutionContext) {
    // Get the request from the context.
    const request = context.switchToHttp().getRequest();
    // Return the user ID from the request session.
    return request.session.userId;
  }
}
