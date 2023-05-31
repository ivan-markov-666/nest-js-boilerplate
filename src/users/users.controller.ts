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

  // Added new @Get() route for checking the current user in the session.
  @Get('/whoami')
  // Added '@Session()' to the whoAmI method.
  whoAmI(@Session() session: any) {
    // Return the user.
    return this.usersService.findOne(session.userId);
  }

  // Added new @Post() route for signout.
  @Post('/signout')
  signout(@Session() session: any) {
    session.userId = null;
  }

  // Added new @Post() route for signup.
  @Post('/signup')
  // Added '@Session()' to the createUser method.
  async createUser(@Body() body: CreteUserDto, @Session() session: any) {
    // Assign the user id to the 'user' const.
    const user = await this.authService.signup(body.email, body.password);
    // Assign the user id to the session.
    session.userId = user.id;
    // Return the user.
    return user;
  }

  // Added new @Post() route for signin.
  @Post('/signin')
  // Added '@Session()' to the signin method.
  async signin(@Body() body: CreteUserDto, @Session() session: any) {
    // Assign the user id to the 'user' const.
    const user = await this.authService.signin(body.email, body.password);
    // Assign the user id to the session.
    session.userId = user.id;
    // Return the user.
    return user;
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
