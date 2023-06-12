import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { Users } from './users.entity';
// Import the 'NotFoundException' classes from the '@nestjs/common' package.
import { NotFoundException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  // Declare a fake users service that will be used in the tests below to replace the real one.
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    // Refactor it to use a fake users service. Replace the real one with a fake one.
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

  // Add a test to ensure that the signup method throws an error if the email is not used (not registered).
  it('throws if signin is called with an unused email', async () => {
    // Refactor it to use a fake users service. Replace the real one with a fake one.
    await expect(
      // Call the signup method with an email that is already in use.
      service.signin('asdflkj@asdlfkj.com', 'passdflkj'),
      // Reject the promise if the signup method throws an error.
    ).rejects.toThrow(NotFoundException);
  });
});
