import { Injectable } from '@nestjs/common';
// Import the Repository from TypeORM
import { Repository } from 'typeorm';
// Import the InjectRepository decorator from TypeORM
import { InjectRepository } from '@nestjs/typeorm';
// Import the Users entity
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  create(email: string, password: string) {
    /** 
     * // If we provide 'email' and 'password' to the 'create' method, it will create a new user, and then use the 'hook' methods. Uncomment the following lines to see the result.
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
    */
    // If we provide 'email' and 'password' to the 'save' method, it will create a new user, without using the 'hook' methods.
    return this.repo.save({ email, password });
  }
}
