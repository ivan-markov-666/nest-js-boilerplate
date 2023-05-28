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
  // Added 'Session' to the import statement.
  Session,
} from '@nestjs/common';
import { CreteUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  // Example of using the session object.
  // Add the "Get" decorator for '/colors/:color'.
  @Get('/colors/:color')
  // Added 'setColor' method. The '@Param' decorator is used to get the color and the '@Session' decorator is used to get the session object.
  setColor(@Param('color') color: string, @Session() session: any) {
    // Set the color property on the session object.
    session.color = color;
  }

  // Add the "Get" decorator for '/colors'.
  @Get('/colors')
  // Added 'getColor' method. The '@Session' decorator is used to get the session object.
  getColor(@Session() session: any) {
    // Return the color property on the session object.
    return session.color;
  }

  @Post('/signup')
  createUser(@Body() body: CreteUserDto) {
    return this.authService.signup(body.email, body.password);
  }

  @Post('/signin')
  signin(@Body() body: CreteUserDto) {
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
