import { Injectable } from '@nestjs/common';
import { ExampleRepository } from './example.repository';

@Injectable()
export class ExampleService_BetterPractice {
  constructor(public exampleRepo: ExampleRepository) {}

  async findOne(id: string) {
    return this.exampleRepo.findOne(id);
  }

  async findAll() {
    return this.exampleRepo.findAll();
  }

  async create(exampleMessage: string) {
    return this.exampleRepo.create(exampleMessage);
  }
}
