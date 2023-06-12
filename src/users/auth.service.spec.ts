import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    // Create an empty array of users to be used in the fakeUsersService object below (which is used to mock the UsersService).
    const users: Users[] = [];
    fakeUsersService = {
      // Refactor the find method to return a filtered array of users based on the email passed in.
      find: (email: string) => {
        const filteredUsers = users.filter((user) => user.email === email);
        return Promise.resolve(filteredUsers);
      },
      // Refactor the create method to create a new user object and push it into the users array.
      create: (email: string, password: string) => {
        // Create a new user object with a random id, the email and password passed in, and return it.
        const user = {
          id: Math.floor(Math.random() * 9999999),
          email,
          password,
        } as Users;
        // Push the new user object into the users array.
        users.push(user);
        // Return the new user object.
        return Promise.resolve(user);
      },
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signup(
      'testingemail123123wer@qa4free.com',
      'password123',
    );

    expect(user.password).not.toEqual('password123');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws if signin is called with an unused email', async () => {
    await expect(
      service.signin('asdflkj@asdlfkj.com', 'passdflkj'),
    ).rejects.toThrow(NotFoundException);
  });

  it('throws an error if user signs up with email that is in use', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([{ id: 1, email: 'a', password: '1' } as Users]);
    await expect(service.signup('asdf@asdf.com', 'asdf')).rejects.toThrow();
  });

  it('throws if an invalid password is provided', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        { email: 'asdf@asdf.com', password: 'laskdjf' } as Users,
      ]);
    await expect(service.signin('asdf@asdf.com', 'passowrd')).rejects.toThrow(
      BadRequestException,
    );
  });

  // Add a test to check that the signin method returns a user if the correct password is provided.
  it('returns a user if correct password is provided', async () => {
    // Create a new user and store it in the fakeUsersService object.
    await service.signup('test213qwe@qa4free.com', 'password');
    // Call the signin method and store the result in a variable.
    const user = await service.signin('test213qwe@qa4free.com', 'password');
    // Expect the user to be defined.
    expect(user).toBeDefined();
  });
});
