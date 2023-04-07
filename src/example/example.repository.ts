// Import the readFile and writeFile functions from the fs/promises module.
import { readFile, writeFile } from 'fs/promises';

// Create a class that will be used to access the data.
export class ExampleRepository {
  // Create a method that will be used to find a single example.
  async findOne(id: string) {
    // Read the contents of the example.json file.
    const contents = await readFile('example.json', 'utf-8');
    // Parse the contents of the file into a JavaScript object.
    const examples = JSON.parse(contents);
    // Return the example with the given id.
    return examples[id];
  }

  // Create a method that will be used to find all examples.
  async findAll() {
    // Read the contents of the example.json file.
    const contents = await readFile('example.json', 'utf-8');
    // Parse the contents of the file into a JavaScript object.
    const examples = JSON.parse(contents);
    // Return all of the examples.
    return examples;
  }

  // Create a method that will be used to create a new example.
  async create(exampleMessage: string) {
    // Read the contents of the example.json file.
    const contents = await readFile('example.json', 'utf-8');
    // Parse the contents of the file into a JavaScript object.
    const examples = JSON.parse(contents);

    // Create a new example object.
    const id = Math.floor(Math.random() * 999);
    // Add the new example to the examples object.
    examples[id] = { id, content: exampleMessage };

    // Write the updated examples object to the example.json file.
    await writeFile('example.json', JSON.stringify(examples));

    // Return the id of the new example.
    return id;
  }
}
