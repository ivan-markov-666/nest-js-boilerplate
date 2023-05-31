import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { Users } from './users.entity';
// Import the 'CurrentUserInterceptor' interceptor.
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  // Add the 'CurrentUserInterceptor' interceptor to the 'providers' array.
  providers: [UsersService, AuthService, CurrentUserInterceptor],
})
export class UsersModule {}
