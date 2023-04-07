import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreteExampleDto } from './dtos/create-example.dto';
// import { ExampleService_BadPractice } from './example.service';
import { ExampleService_BadPractice } from './example.service';

@Controller('example')
export class ExampleController {
  // !!! ALERT !!!
  // This is not a good practice.
  // Please use dependency injection instead.
  // Create a private property that will be used to access the data.
  exampleService_BadPractice: ExampleService_BadPractice;

  // Create a constructor that will be used to create the dependencies.
  constructor() {
    // Service is creating its own dependencies.
    this.exampleService_BadPractice = new ExampleService_BadPractice();
  }

  @Get()
  listText() {
    // Return the result of calling the findAll method on the exampleService_BadPractice property.
    // The key point here is that we are returning the result of calling the findAll method on the exampleService_BadPractice property.
    return this.exampleService_BadPractice.findAll();
  }

  @Post()
  createText(@Body() body: CreteExampleDto) {
    // Return the result of calling the create method on the exampleService_BadPractice property.
    // The key point here is that we are returning the result of calling the create method on the exampleService_BadPractice property.
    return this.exampleService_BadPractice.create(body.text);
  }

  @Get(':id')
  getText(@Param('id') id: string) {
    // Return the result of calling the findOne method on the exampleService_BadPractice property.
    // The key point here is that we are returning the result of calling the findOne method on the exampleService_BadPractice property.
    return this.exampleService_BadPractice.findOne(id);
  }
}
