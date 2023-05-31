import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    // Get the request object from NestJS context object (which is the 2nd argument of the decorator) and then get the session object from the request object.
    const request = context.switchToHttp().getRequest();
    // Print out the session object to see what it looks like.
    console.log('request.session.userId', request.session.userId);
    return 'testing message';
  },
);
