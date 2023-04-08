import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreteExampleDto } from './dtos/create-example.dto';
import { ExampleService_BestPractice } from './example.service';

@Controller('example')
export class ExampleController {
  // Add the exampleService_BestPractice to the constructor.
  constructor(
    public exampleService_BestPractice: ExampleService_BestPractice,
  ) {}

  @Get()
  listText() {
    return this.exampleService_BestPractice.findAll();
  }

  @Post()
  createText(@Body() body: CreteExampleDto) {
    return this.exampleService_BestPractice.create(body.text);
  }

  @Get('/:id')
  async getText(@Param('id') id: string) {
    const message = await this.exampleService_BestPractice.findOne(id);

    if (!message) {
      throw new NotFoundException();
    }
    return message;
  }
}
