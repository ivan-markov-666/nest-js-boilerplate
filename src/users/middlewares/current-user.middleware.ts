/**
 * @description This file contains the middleware that will be used to set the 'currentUser' property of the 'request' object.
 */

// Import the 'Injectable' and 'NestMiddleware' decorators from the '@nestjs/common' package.
import { Injectable, NestMiddleware } from '@nestjs/common';
// Import the 'Request', 'Response', and 'NextFunction' interfaces from the 'express' package.
import { Request, Response, NextFunction } from 'express';
// Import the 'UsersService' and 'Users' classes from the '../users.service' and '../users.entity' files respectively.
import { UsersService } from '../users.service';
// Import the 'Users' class from the '../users.entity' file.
import { Users } from '../users.entity';

// Extend the 'Request' interface to add a 'currentUser' property.
declare global {
  // Added 'namespace Express' to the 'declare global' block.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    // Added the 'interface Request' block to the 'namespace Express' block.
    interface Request {
      // Added the 'currentUser' property to the 'interface Request' block.
      currentUser?: Users;
    }
  }
}

// Added '@Injectable()' decorator to the 'CurrentUserMiddleware' class.
@Injectable()
// Create a new class called 'CurrentUserMiddleware' that implements the 'NestMiddleware' interface.
export class CurrentUserMiddleware implements NestMiddleware {
  // Created new constructor that accepts a 'UsersService' instance.
  constructor(private usersService: UsersService) {}

  // Implement the 'use()' method of the 'NestMiddleware' interface. This method will be used to set the 'currentUser' property of the 'request' object.
  async use(req: Request, res: Response, next: NextFunction) {
    // Get the 'userId' property from the 'session' object of the 'request' object.
    const { userId } = req.session || {};
    // Check if the 'userId' property is set. If the 'userId' property is set, it means that the user is logged in. In this case, get the user from the database and set the 'currentUser' property of the 'request' object to the user.
    if (userId) {
      // Get the user from the database.
      const user = await this.usersService.findOne(userId);
      console.log('Current user:', user);
      // Set the 'currentUser' property of the 'request' object to the user.
      req.currentUser = user;
    }
    // Call the 'next()' function to pass the 'request' object to the next middleware.
    next();
  }
}
