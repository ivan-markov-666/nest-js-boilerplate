// In that example we will use the same service multiple times.
// It is just a simple example, but it can be useful in some cases.
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
  constructor(
    public exampleService_BetterPractice: ExampleService_BetterPractice,
    // Notice that we can inject the same service multiple times
    public exampleService_BetterPractice2: ExampleService_BetterPractice,
    // And the same instance will be used
    public exampleService_BetterPractice3: ExampleService_BetterPractice,
  ) {
    // This will print true
    console.log(
      exampleService_BetterPractice === exampleService_BetterPractice2,
    );
    // This will print true
    console.log(
      exampleService_BetterPractice === exampleService_BetterPractice3,
    );
  }

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
