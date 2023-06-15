import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
// Import the 'UsersService' from the 'users.service.ts' file.
import { UsersService } from './users.service';
// Import the 'AuthService' from the 'auth.service.ts' file.
import { AuthService } from './auth.service';
// Import the 'Users' from the 'users.entity.ts' file.
import { Users } from './users.entity';
// Import the 'NotFoundException' from the '@nestjs/common' package.
import { NotFoundException } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  // Create a 'fakeUsersService' variable of type 'Partial<UsersService>'.
  let fakeUsersService: Partial<UsersService>;
  // Create a 'fakeAuthService' variable of type 'Partial<AuthService>'.
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    // Set the 'fakeUsersService' variable to an object.
    fakeUsersService = {
      // Add a 'findOne' property to the 'fakeUsersService' object.
      findOne: (id: number) => {
        // Return a promise that resolves to an object.
        return Promise.resolve({
          // Set the 'id' property.
          id,
          // Set the 'email' property.
          email: 'asdf@asdf.com',
          // Set the 'password' property.
          password: 'asdf',
          // Assert that the object is of type 'Users'.
        } as Users);
      },
      // Add a 'find' property to the 'fakeUsersService' object.
      find: (email: string) => {
        // Return a promise that resolves to an array of objects.
        return Promise.resolve([
          {
            // Set the 'id' property.
            id: 1,
            // Set the 'email' property.
            email,
            // Set the 'password' property.
            password: 'asdf',
            // Assert that the object is of type 'Users'.
          } as Users,
        ]);
      },
      // remove: () => {},
      // update: () => {},
    };
    fakeAuthService = {
      // signup: () => {},
      // Add a 'signin' property to the 'fakeAuthService' object.
      signin: (email: string, password: string) => {
        // Return a promise that resolves to an object.
        return Promise.resolve({
          // Set the 'id' property.
          id: 1,
          // Set the 'email' property.
          email,
          // Set the 'password' property.
          password,
          // Assert that the object is of type 'Users'.
        } as Users);
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      // Add 'providers' to the 'module' object.
      providers: [
        // Add a 'UsersService' property to the 'providers' array.
        {
          // Set the 'provide' property to 'UsersService'.
          provide: UsersService,
          // Set the 'useValue' property to the 'fakeUsersService' object.
          useValue: fakeUsersService,
        },
        // Add a 'AuthService' property to the 'providers' array.
        {
          // Set the 'provide' property to 'AuthService'.
          provide: AuthService,
          // Set the 'useValue' property to the 'fakeAuthService' object.
          useValue: fakeAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Add new test for the 'findAllUsers' method.
  it('findAllUsers returns a list of users with the given email', async () => {
    // Set the 'users' variable to the result of the 'findAllUsers' method.
    const users = await controller.findAllUsers('asdf@asdf.com');
    // Assert that the 'users' variable is an array.
    expect(users.length).toEqual(1);
    // Assert that the 'users' variable's first element's 'email' property is equal to 'asdf@asdf'.
    expect(users[0].email).toEqual('asdf@asdf.com');
  });

  // Add new test for the 'findAllUsers' method.
  it('findUser returns a single user with the given id', async () => {
    // Set the 'user' variable to the result of the 'findUser' method.
    const user = await controller.findUser('1');
    // Assert that the 'user' variable is defined.
    expect(user).toBeDefined();
  });

  // Add new test for the 'findUser' method.
  it('findUser throws an error if user with given id is not found', async () => {
    // Set the 'fakeUsersService' object's 'findOne' property to a function that returns 'null'.
    fakeUsersService.findOne = () => null;
    // Assert that the 'findUser' method throws a 'NotFoundException'.
    await expect(controller.findUser('1')).rejects.toThrow(NotFoundException);
  });

  // Add new test for the 'signin' method.
  it('signin updates session object and returns user', async () => {
    // Set the 'session' variable to an object.
    const session = { userId: -10 };
    // Set the 'user' variable to the result of the 'signin' method.
    const user = await controller.signin(
      // Set the 'signin' method's 'body' parameter to an object.
      { email: 'asdf@asdf.com', password: 'asdf' },
      // Set the 'signin' method's 'session' parameter to the 'session' object.
      session,
    );
    // Assert that the 'user' variable's 'id' property is equal to '1'.
    expect(user.id).toEqual(1);
    // Assert that the 'session' variable's 'userId' property is equal to '1'.
    expect(session.userId).toEqual(1);
  });
});
