import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { Users } from './users.entity';
// Added 'BadRequestException' to from nestjs/common.
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as Users),
    } as unknown as UsersService;

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

  // Added a test for signin with a email that it is in use.
  it('throws an error if user signs up with email that is in use', async () => {
    // Create a user with the email that we are going to use in the test.
    fakeUsersService.find = () =>
      // Return a promise with the user that we created.
      Promise.resolve([{ id: 1, email: 'a', password: '1' } as Users]);
    // Call the signin method with the email that we created.
    await expect(service.signup('asdf@asdf.com', 'asdf')).rejects.toThrow();
  });

  // Added a test for signin with a valid email and invalid password.
  it('throws if an invalid password is provided', async () => {
    // Create a user with the email that we are going to use in the test.
    fakeUsersService.find = () =>
      // Return a promise with the user that we created.
      Promise.resolve([
        // Create a user with the email that we are going to use in the test.
        { email: 'asdf@asdf.com', password: 'laskdjf' } as Users,
      ]);
    // Call the signin method with the email that we created.
    await expect(service.signin('asdf@asdf.com', 'passowrd'))
      // Expect the promise to throw an error.
      .rejects.toThrow(BadRequestException);
  });
});
