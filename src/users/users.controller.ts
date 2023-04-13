import { Body, Controller, Post } from '@nestjs/common';
import { CreteUserDto } from './dtos/create-user.dto';
// Import the UsersService class from the users.service.ts file.
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  // Inject the UsersService class into the UsersController class using the constructor.
  constructor(private usersService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: CreteUserDto) {
    // Call the create() method from the UsersService class and pass the email and password as arguments to the method.
    this.usersService.create(body.email, body.password);
  }
}
