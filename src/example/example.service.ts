// import { ExampleRepository } from './example.repository';
import { ExampleRepository } from './example.repository';

// Create a class that will be used to access the data.
export class ExampleService_BadPractice {
  // Create a private property that will be used to access the data.
  exampleRepo: ExampleRepository;
  // Create a constructor that will be used to create the dependencies.
  constructor() {
    // Service is creating its own dependencies.
    // !!! ALERT !!!
    // This is not a good practice.
    // Please use dependency injection instead.
    this.exampleRepo = new ExampleRepository();
  }

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
