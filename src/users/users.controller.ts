// Added 'Get, 'Patch', 'Param', 'Query' and 'Delete' from '@nestjs/common' to the import statement.
import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { CreteUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
// Added 'UpdateUserDto' from './dtos/update-user.dto' to the import statement.
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreteUserDto) {
    this.usersService.create(body.email, body.password);
  }

  /**
   * @description Find a user by id.
   * @param id    Please provide the id of the user you want to find.
   * @returns     Returns the user. If the user is not found, returns undefined.
   * @example     await this.usersService.findUser(1); // Returns the user with id 1. If the user is not found, returns undefined.
   * @type        {Promise<Users>} // Returns a Promise of type Users.
   */
  @Get('/:id')
  // Added 'id' to the parameter list.
  // The 'id' parameter is a string.
  // The 'id' parameter is the id of the user you want to find.
  // The 'id' parameter is passed to the 'findUser' method.
  findUser(@Param('id') id: string) {
    // Return the result of the 'findOne' method.
    // The 'findOne' method is called on the 'usersService' object.
    // The 'findOne' method is passed the 'id' parameter.
    // The 'findOne' method returns a Promise of type Users.
    return this.usersService.findOne(parseInt(id));
  }

  /**
   * @description   Find a user by email.
   * @param email   Please provide the email of the user you want to find.
   * @returns       Returns the user. If the user is not found, returns undefined.
   * @example       await this.usersService.findUser('email'); // Returns the user with email 'email'. If the user is not found, returns undefined.
   * @type          {Promise<Users>} // Returns a Promise of type Users.
   * @returns       Returns the user. If the user is not found, returns undefined.
   */
  @Get()
  // Create a 'findAllUsers' method.
  findAllUsers(@Query('email') email: string) {
    // Return the result of the 'find' method.
    return this.usersService.find(email);
  }

  /**
   * @description   Remove a user by id.
   * @param id      Please provide the id of the user you want to update.
   * @returns       Returns the updated user.
   * @example       await this.usersService.update(1, { email: ' updated email ' });
   * @type          {Promise<Users>}
   */
  @Delete('/:id')
  // Create a 'removeUser' method.
  removeUser(@Param('id') id: string) {
    // Return the result of the 'remove' method.
    return this.usersService.remove(parseInt(id));
  }

  /**
   * @description   Update a user by id.
   * @param id      Please provide the id of the user you want to update.
   * @param body    Please provide the data you want to update.
   * @returns       Returns the updated user.
   * @example       await this.usersService.update(1, { email: ' updated email ' });
   * @type          {Promise<Users>}
   */
  @Patch('/:id')
  // Create a 'updateUser' method.
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    // Return the result of the 'update' method.
    return this.usersService.update(parseInt(id), body);
  }
}
