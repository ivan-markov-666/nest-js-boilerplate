import { ExampleRepository } from './example.repository';

export class ExampleService_BadPractice {
  exampleRepo: ExampleRepository;
  constructor() {
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
