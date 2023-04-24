import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Import 'classToPlain' from 'class-transformer'.
import { plainToClass } from 'class-transformer';
// Import 'UserDto' from '../users/dtos/user.dto'.
import { UserDto } from '../users/dtos/user.dto';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        // Return 'plainToClass' with 'UserDto' and 'data'.
        return plainToClass(UserDto, data, {
          // Set 'excludeExtraneousValues' to 'true'.
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
