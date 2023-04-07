// Imported NotFoundException from @nestjs/common.
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreteExampleDto } from './dtos/create-example.dto';
import { ExampleService_BadPractice } from './example.service';

@Controller('example')
export class ExampleController {
  exampleService_BadPractice: ExampleService_BadPractice;

  constructor() {
    this.exampleService_BadPractice = new ExampleService_BadPractice();
  }

  @Get()
  listText() {
    return this.exampleService_BadPractice.findAll();
  }

  @Post()
  createText(@Body() body: CreteExampleDto) {
    return this.exampleService_BadPractice.create(body.text);
  }

  @Get('/:id')
  // Added async to the function.
  async getText(@Param('id') id: string) {
    // Assigned the result of the function to a variable.
    const message = await this.exampleService_BadPractice.findOne(id);

    // Added an if statement to check if the variable is undefined.
    if (!message) {
      // Threw the exception.
      throw new NotFoundException();
    }
    // Returned the variable.
    return message;
  }
}
// This is just a example how to use ExceptionFilter. There are other exceptions. You can find them in the NestJS documentation.
