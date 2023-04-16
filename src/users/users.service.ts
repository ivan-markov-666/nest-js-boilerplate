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
    // It is important to note that the create() method does not save the user to the database. It only creates a new user instance, but we need to save the user to the database using the save() method first.
    const user = this.repo.create({ email, password });
    // Save the user to the database using the save() method and return the saved user to the caller of the create() method.
    // It is important to note that the save() method should be called after the create() method because the create() method does not save the user to the database.
    return this.repo.save(user);
  }
}
