// Import the 'Test' object from the '@nestjs/testing' module. This object is used to create a testing module.
import { Test } from '@nestjs/testing';
// Import the 'AuthService' from the 'auth.service.ts' file. This is the service we want to test.
import { AuthService } from './auth.service';
// Import the 'UsersService' from the 'users.service.ts' file. This is the service that the 'AuthService' depends on.
import { UsersService } from './users.service';

// Added 'it' block to test the 'AuthService' service.
it('can create an instance of auth service', async () => {
  // Create a fake copy of the users service that we can control and inspect later.
  const fakeUsersService = {
    // Create a 'find' method that returns an empty array.
    find: () => Promise.resolve([]),
    // Create a 'create' method that returns an object with an 'email', and 'password' property.
    create: (email: string, password: string) =>
      // Return an object with an 'id', 'email', and 'password' property.
      Promise.resolve({ id: 1, email, password }),
    // 'unknown' is a type that represents any JavaScript value. We use it here because we don't know what the 'UsersService' is returning.
  } as unknown as UsersService;

  // Create a testing module that contains the 'AuthService' and the 'fakeUsersService'.
  const module = await Test.createTestingModule({
    // Define the providers that the testing module should use.
    providers: [
      // Add the 'AuthService' to the 'providers' array.
      AuthService,
      {
        // Add the 'UsersService' to the 'providers' array.
        provide: UsersService,
        // Use the 'fakeUsersService' as the value for the 'UsersService'.
        useValue: fakeUsersService,
      },
    ],
    // Compile the testing module.
  }).compile();

  // Get the 'AuthService' from the testing module.
  const service = module.get(AuthService);
  // Expect the 'service' to be defined.
  expect(service).toBeDefined();
});
