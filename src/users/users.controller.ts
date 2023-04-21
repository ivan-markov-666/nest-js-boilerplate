// Added 'NotFoundException' from the '@nestjs/common' module.
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

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreteUserDto) {
    this.usersService.create(body.email, body.password);
  }

  /**
   * @description     Find a user by id.
   * @param id        The id of the user.
   * @returns         The user.
   *                    - If the user is not found, it will return a 404 status code.
   *                    - If the user is found, it will return a 200 status code.
   */
  @Get('/:id')
  // Add the 'async' keyword to the 'findUser' method.
  async findUser(@Param('id') id: string) {
    // Declare the 'user' variable and assign the result of the 'findOne' method to it.
    // Add the 'await' keyword to the 'findOne' method.
    const user = await this.usersService.findOne(parseInt(id));
    // Check if the 'user' variable is undefined.
    if (!user) {
      // Throw the 'NotFoundException' instead of the 'Error' object.
      // The benefit of using the 'NotFoundException' is that it will return a 404 status code. With 'Error' it will return a 500 status code.
      throw new NotFoundException('user not found');
    }
    // Return the 'user' variable.
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
