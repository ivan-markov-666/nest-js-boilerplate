// Imported the Get and Post decorators from the @nestjs/common package.
import { Controller, Get, Post } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  // Added the Get decorator to the listText() method.
  @Get()
  // Created the listText() method.
  listText() {}

  // Added the Post decorator to the createText() method.
  @Post()
  // Created the createText() method.
  createText() {}

  // Added the Get decorator to the getText() method.
  @Get(':id')
  // Created the getText() method.
  getText() {}
}
