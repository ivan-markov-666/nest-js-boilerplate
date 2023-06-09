import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { Users } from './users.entity';

// Define 'describe' block. Inside the block define 'AuthService' and 'UsersService' variables. This block is used to group tests together.
describe('AuthService', () => {
  // Define 'service' variable.
  let service: AuthService;

  // Add 'beforeEach' block. Inside the block move the 'fakeUserService' and 'module' variables from the 'it' block. By that approach, we can use the 'fakeUserService' in all 'it' blocks (the code inside the 'beforeEach' block will run before each 'it' block).
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

    // Remove 'const' keyword from the 'service' variable, because we define it in beginning of the file.
    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });
});
