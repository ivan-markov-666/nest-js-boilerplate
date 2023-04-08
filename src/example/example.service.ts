// This is a good practice because the service is loosely coupled to the repository.
// Import the 'Injectable' decorator from the '@nestjs/common' package.
import { Injectable } from '@nestjs/common';
import { ExampleRepository } from './example.repository';

// Add the 'Injectable' decorator to the class.
@Injectable()
export class ExampleService_BestPractice {
  // This is a bad practice because the service is tightly coupled to the repository.
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
