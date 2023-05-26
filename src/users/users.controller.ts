import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CreteUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
// Import the 'AuthService' from src\users\auth.service.ts.
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService, // Inject the 'AuthService' into the constructor.
  ) {}

  @Post('/signup')
  createUser(@Body() body: CreteUserDto) {
    // Remove "this.usersService.create(body.email, body.password);" and replace it with "this.authService.signup(body.email, body.password);
    return this.authService.signup(body.email, body.password); // Call the 'signup' method from the 'AuthService'.
  }

  // Add a new route handler for the '/signin' route.
  @Post('/signin')
  // 'signin' method is used for signing in a user.
  signin(@Body() body: CreteUserDto) {
    // Return the 'signin' method from the 'AuthService'.
    return this.authService.signin(body.email, body.password);
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
