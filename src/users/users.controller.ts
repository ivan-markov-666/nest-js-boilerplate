// Import 'Body' and 'Post' from the @nestjs/common package.
import { Body, Controller, Post } from '@nestjs/common';
// Import 'CreteUserDto' from the './dtos/create-user.dto' file.
import { CreteUserDto } from './dtos/create-user.dto';

// Changed the endpoint to '/auth'.
@Controller('auth')
export class UsersController {
  // Created a new endpoint '/signup' with the Post decorator.
  @Post('/signup')
  // Added the 'createUser' method with the 'CreteUserDto' parameter.
  createUser(@Body() body: CreteUserDto) {
    // Added a console.log() statement to log the body.
    console.log(body);
  }
}
