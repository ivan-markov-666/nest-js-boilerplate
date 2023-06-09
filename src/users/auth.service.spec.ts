import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { Users } from './users.entity';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const fakeUsersService: Partial<UsersService> = {
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

  // Add 'it' block.
  it('creates a new user with a salted and hashed password', async () => {
    // Execute the 'service.signup' method and assign the result to a variable.
    const user = await service.signup(
      // Pass in dummy email data.
      'testingemail123123wer@qa4free.com',
      // Pass in dummy password data.
      'password123',
    );

    // Expect the user's password to not be the same as the dummy password data. This is because the password is salted and hashed.
    expect(user.password).not.toEqual('password123');
    // Expect the user's email to be the same as the dummy email data.
    const [salt, hash] = user.password.split('.');
    // Expect the user's email to be the same as the dummy email data.
    expect(salt).toBeDefined();
    // Expect the user's email to be the same as the dummy email data.
    expect(hash).toBeDefined();
  });
});
