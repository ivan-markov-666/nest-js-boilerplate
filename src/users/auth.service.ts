// Import the 'BadRequestException', 'Injectable', and 'NotFoundException' from the '@nestjs/common' module.
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Import the 'UsersService' from src\users\users.service.ts.
import { UsersService } from './users.service';
// Import the 'randomBytes' and 'scrypt' from the 'crypto' module.
import { randomBytes, scrypt as _scrypt } from 'crypto';
// Import the 'promisify' from the 'util' module.
import { promisify } from 'util';

// Create a promisified version of the 'scrypt' function.
const scrypt = promisify(_scrypt);

// Add the '@Injectable()' decorator. Injectable decorator is used to inject the 'UsersService' into the 'AuthService'.
@Injectable()
// Create a new class called 'AuthService'. This class will be used for signing up and signing in users.
export class AuthService {
  // Inject the 'UsersService' into the constructor. This will allow us to use the 'UsersService' in the 'AuthService'.
  constructor(private usersService: UsersService) {}

  // Create a new method called 'signup'. This method will be used for signing up a user.
  async signup(email: string, password: string) {
    // See if email is in use.
    const users = await this.usersService.find(email);
    // If there is a user, throw an error.
    if (users.length > 0) {
      // Throw a new 'BadRequestException' with the message 'Email in use'.
      throw new BadRequestException('Email in use');
    }

    // Hash the user's password.
    // Generate a salt.
    const salt = randomBytes(8).toString('hex');

    // Hash the password along with our new salt.
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // Join the hashed result and the salt together.
    const result = salt + '.' + hash.toString('hex');

    // Create a new user and save it.
    const user = await this.usersService.create(email, result);

    // Return the user.
    return user;
  }

  // Create a new method called 'signin'. This method will be used for signing in a user.
  async signin(email: string, password: string) {
    // Find the user in the database. If the user is not found, throw an error.
    const [user] = await this.usersService.find(email);
    // If there is no user, throw a new 'NotFoundException' with the message 'The user was not found'.
    if (!user) {
      // Throw a new 'NotFoundException' with the message 'The user was not found'.
      throw new NotFoundException('The user was not found');
      // If there is a user, compare passwords.
    }

    // Get the salt from the user's saved password.
    const [salt, storedHash] = user.password.split('.');

    // Hash the provided password along with the salt.
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // If the hashed result is not equal to the saved hash, throw an error.
    if (storedHash !== hash.toString('hex')) {
      // Throw a new 'BadRequestException' with the message 'Bad password'.
      throw new BadRequestException('Bad password');
    }

    // Return the user if everything is ok.
    return user;
  }
}
