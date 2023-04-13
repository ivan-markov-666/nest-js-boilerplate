import { Injectable } from '@nestjs/common';
// Import the Repository from TypeORM
import { Repository } from 'typeorm';
// Import the InjectRepository decorator from TypeORM
import { InjectRepository } from '@nestjs/typeorm';
// Import the Users entity
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  // Inject the Users repository into the service constructor using the @InjectRepository() decorator from TypeORM NestJS package and pass the Users entity as an argument to the decorator to tell TypeORM which repository to inject.
  // The @InjectRepository() decorator will automatically create a repository instance for the Users entity and inject it into the service constructor.
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  // Create a method to create a new user
  create(email: string, password: string) {
    // Create a new user instance using the Users entity and pass the email and password as arguments to the create() method
    const user = this.repo.create({ email, password });
    // Save the user to the database using the save() method
    return this.repo.save(user);
  }
}
