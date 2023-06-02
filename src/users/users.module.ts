import { Module } from '@nestjs/common';
// Import the 'APP_INTERCEPTOR' constant.
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { Users } from './users.entity';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    // Add the an array of providers to the 'providers' array.
    {
      // The 'APP_INTERCEPTOR' constant is a special token that tells Nest to provide the interceptor.
      provide: APP_INTERCEPTOR,
      // The interceptor class that we want to use.
      useClass: CurrentUserInterceptor,
    },
  ],
})
export class UsersModule {}
