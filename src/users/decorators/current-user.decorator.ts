// import the createParamDecorator() and ExecutionContext from @nestjs/common package.
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// create a custom decorator to get the current user.
export const CurrentUser = createParamDecorator(
  // create a function that will return the data from the custom decorator.
  (data: never, context: ExecutionContext) => {
    // Return some testing data.
    return 'testing message';
  },
);
