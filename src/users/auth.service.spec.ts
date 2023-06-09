import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
// Import 'Users' entity to use it in the fakeUsersService object below to mock the UsersService dependency in the AuthService class.
import { Users } from './users.entity';

it('can create an instance of auth service', async () => {
  // Add 'Partial' to the fakeUsersService object to mock the UsersService dependency in the AuthService class.
  const fakeUsersService: Partial<UsersService> = {
    find: () => Promise.resolve([]),
    create: (email: string, password: string) =>
      // Add 'as Users' to the end of the object to mock the UsersService dependency in the AuthService class.
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

  const service = module.get(AuthService);
  expect(service).toBeDefined();
});
