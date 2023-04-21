import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  /**
   * @description Update a user by id.
   * @param id    Please provide the id of the user you want to update.
   * @param attrs Please provide the attributes you want to update.
   * @returns     Returns the updated user.
   * @example     await this.usersService.update(1, { email: ' updated email ' });
   * @type        {Promise<Users>}
   */
  async update(id: number, attrs: Partial<Users>) {
    // Declare a variable and assign it to the result of the await expression.
    // The await expression causes the async function to pause until the Promise is settled.
    // If the Promise is fulfilled, the await expression returns the fulfilled value.
    // If the Promise is rejected, the await expression throws the rejected value.
    const user = await this.findOne(id);
    // If the user is not found, throw an error.
    if (!user) {
      throw new Error('user not found');
    }
    // If the user is found, assign the attributes to the user and save the user.
    Object.assign(user, attrs);
    // Return the user.
    return this.repo.save(user);
  }

  /**
   * @description Remove a user by id.
   * @param id    Please provide the id of the user you want to remove.
   * @returns     Returns the removed user.
   * @example     await this.usersService.remove(1);
   * @type        {Promise<Users>}
   */
  async remove(id: number) {
    // Declare a variable and assign it to the result of the await expression.
    const user = await this.repo.findOne({ where: { id } });
    // If the user is not found, throw an error.
    if (!user) {
      // Throw an error.
      throw new Error('user not found');
    }
    // If the user is found, remove the user.
    return this.repo.remove(user);
  }
}
