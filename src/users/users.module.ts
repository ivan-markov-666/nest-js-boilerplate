import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// Added 'AuthService' from src\users\auth.service.ts.
import { AuthService } from './auth.service';
import { Users } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService, AuthService], // Added 'AuthService' to the providers array.
})
export class UsersModule {}
