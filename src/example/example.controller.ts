import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreteExampleDto } from './dtos/create-example.dto';
import { ExampleService_BetterPractice } from './example.service';

@Controller('example')
export class ExampleController {
  // Add the exampleService_BetterPractice to the constructor.
  constructor(
    public exampleService_BetterPractice: ExampleService_BetterPractice,
  ) {}

  @Get()
  listText() {
    return this.exampleService_BetterPractice.findAll();
  }

  @Post()
  createText(@Body() body: CreteExampleDto) {
    return this.exampleService_BetterPractice.create(body.text);
  }

  @Get('/:id')
  async getText(@Param('id') id: string) {
    const message = await this.exampleService_BetterPractice.findOne(id);

    if (!message) {
      throw new NotFoundException();
    }
    return message;
  }
}
