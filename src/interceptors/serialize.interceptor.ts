import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  // Add 'UseInterceptors' decorator to the controller.
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

// This is a decorator factory function that takes a DTO as an argument.
export function Serialize(dto: any) {
  // It returns a decorator function. This decorator function takes a handler as an argument.
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
