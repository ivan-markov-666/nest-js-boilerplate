// Import the 'MiddlewareConsumer' interface from the '@nestjs/common' package.
import { Module, MiddlewareConsumer } from '@nestjs/common';
// Removed the 'APP_INTERCEPTOR' from the '@nestjs/core' package.
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { Users } from './users.entity';
// Removed the 'CurrentUserInterceptor' interceptor from the './interceptors/current-user.interceptor' file.
// Imported the 'CurrentUserMiddleware' middleware and added it to the 'providers' array.
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    // Removed the 'provide: APP_INTERCEPTOR' property.
    // Removed the 'useClass: CurrentUserInterceptor' property.
  ],
})
export class UsersModule {
  // Added the 'MiddlewareConsumer' interface to the 'configure()' method. This interface will be used to apply middleware to routes.
  configure(consumer: MiddlewareConsumer) {
    // Added the 'CurrentUserMiddleware' middleware to the 'configure()' method. This middleware will be applied to all routes.
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
