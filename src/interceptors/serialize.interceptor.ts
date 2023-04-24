// This is a custom interceptor that will run before the response is sent out to the client.
// It will also run before the request handler is executed.

// Import the 'NestInterceptor', 'ExecutionContext' and 'CallHandler' from the '@nestjs/common' module.
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
// Import the 'Observable' from the 'rxjs' module.
import { Observable } from 'rxjs';
// Import the 'map' operator from the 'rxjs/operators' module.
import { map } from 'rxjs/operators';

// Export the 'SerializeInterceptor' class.
export class SerializeInterceptor implements NestInterceptor {
  // Create the 'intercept' method.
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled by the request handler.
    // Print the 'I am running before the handler' message to the console.
    console.log('I am running before the handler', context);

    // Run something before the response is sent out.
    return handler.handle().pipe(
      // Run the 'map' operator.
      // The 'map' operator will run before the response is sent out.
      // The 'map' operator will run before the request handler is executed.
      // The 'map' operator will run before the 'intercept' method is executed.
      map((data: any) => {
        // Run something before the response is sent out.
        // Print the 'I am running before the response is sent out' message to the console.
        console.log('I am running before the response is sent out', data);
      }),
    );
  }
}
