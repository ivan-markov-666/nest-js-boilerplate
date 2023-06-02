// Remove the 'CurrentUser' import.
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    // Return the currentUser property of the request object.
    return request.currentUser;
  },
);
