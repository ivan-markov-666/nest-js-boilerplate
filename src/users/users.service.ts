// Import the 'NotFoundException' from the '@nestjs/common' module.
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async update(id: number, attrs: Partial<Users>) {
    const user = await this.findOne(id);
    if (!user) {
      // Throw the 'NotFoundException' instead of the 'Error' object.
      // The benefit of using the 'NotFoundException' is that it will return a 404 status code. With 'Error' it will return a 500 status code.
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      // Throw the 'NotFoundException' instead of the 'Error' object.
      // The benefit of using the 'NotFoundException' is that it will return a 404 status code. With 'Error' it will return a 500 status code.
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
