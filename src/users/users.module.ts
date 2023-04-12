import { Module } from '@nestjs/common';
// Imported TypeOrmModule to use TypeORM in NestJS application.
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// Imported Users entity to use it in the module.
import { Users } from './users.entity';

@Module({
  // Imported TypeOrmModule with forFeature() method.
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
