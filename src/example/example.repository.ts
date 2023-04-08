// Import the 'Injectable' decorator from the NestJS core package.
import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

// Add the 'Injectable' decorator to the class.
@Injectable()
export class ExampleRepository {
  async findOne(id: string) {
    const contents = await readFile('example.json', 'utf-8');
    const examples = JSON.parse(contents);
    return examples[id];
  }

  async findAll() {
    const contents = await readFile('example.json', 'utf-8');
    const examples = JSON.parse(contents);
    return examples;
  }

  async create(exampleMessage: string) {
    const contents = await readFile('example.json', 'utf-8');
    const examples = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    examples[id] = { id, content: exampleMessage };
    await writeFile('example.json', JSON.stringify(examples));
    return id;
  }
}
