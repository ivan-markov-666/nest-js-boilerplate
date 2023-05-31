// Import the NestInterceptor, ExecutionContext, CallHandler, Injectable interfaces from @nestjs/common package.
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
// Import the UsersService from src\users\users.service.ts.
import { UsersService } from '../users.service';

// Add the @Injectable() decorator to the class definition.
@Injectable()
// Export the CurrentUserInterceptor class. Implement the NestInterceptor interface.
export class CurrentUserInterceptor implements NestInterceptor {
  // Inject the UsersService into the constructor.
  constructor(private usersService: UsersService) {}

  // Implement the intercept() method. This method will be called before the request is handled by the controller.
  // The intercept() method receives two arguments: context and handler.
  async intercept(context: ExecutionContext, handler: CallHandler) {
    // Get the request object from the context.
    const request = context.switchToHttp().getRequest();
    // Get the userId from the request session.
    const { userId } = request.session;

    // If the userId exists, find the user and assign it to the currentUser property of the request object.
    if (userId) {
      // The 'user' is used to store the user object returned from the findOne() method of the UsersService.
      const user = await this.usersService.findOne(userId);
      // Assign the user object to the currentUser property of the request object.
      request.currentUser = user;
    }
    // Call the handle() method of the handler object to continue the request handling process.
    return handler.handle();
  }
}
