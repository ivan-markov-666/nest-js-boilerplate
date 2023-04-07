import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// Import DTO class that we created.
import { CreteExampleDto } from './dtos/create-example.dto';

@Controller('example')
export class ExampleController {
  @Get()
  listText() {}

  @Post()
  // Change the body: any to body: CreteExampleDto.
  // That way, Nest will automatically validate the request body.
  createText(@Body() body: CreteExampleDto) {
    console.log(body);
  }

  @Get(':id')
  getText(@Param('id') id: string) {
    console.log(id);
  }
}
