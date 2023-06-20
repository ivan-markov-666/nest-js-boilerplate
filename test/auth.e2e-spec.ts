// Import 'Test', 'TestingModule' from @nestjs/testing.
import { Test, TestingModule } from '@nestjs/testing';
// Import 'INestApplication' from @nestjs/common.
import { INestApplication } from '@nestjs/common';
// Import 'request' from 'supertest';
import * as request from 'supertest';
// Import 'AppModule' from 'src\app.module'.
import { AppModule } from './../src/app.module';
// Import 'setupApp' from 'src\setup-app.ts'.
import { setupApp } from '../src/setup-app';

// Create a test suite called 'Authentication System'.
describe('Authentication System', () => {
  // Declare a variable called 'app' of type 'INestApplication'.
  let app: INestApplication;

  // Create a 'beforeEach' hook.
  beforeEach(async () => {
    // Create a 'TestingModule' instance called 'moduleFixture'.
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // Add the 'AppModule' to the 'imports' array.
      imports: [AppModule],
      // compile() the 'TestingModule' instance.
    }).compile();

    // Assign the 'createNestApplication' method to the 'app' variable.
    app = moduleFixture.createNestApplication();
    // Call the 'setupApp' method and pass in the 'app' variable.
    setupApp(app);
    // Call the 'init' method on the 'app' variable.
    await app.init();
  });

  // Create an 'it' block that tests the '/auth/signup' endpoint.
  it('handles a signup request', () => {
    // Declare a variable called 'email' and assign it a value.
    const email = 'testingemail213ew2@qa4free.com';
    // Return a 'request' call that sends a POST request to the '/auth/signup' endpoint.
    return (
      request(app.getHttpServer())
        // 'post' to the '/auth/signup' endpoint.
        .post('/auth/signup')
        // Send the following data in the request body.
        .send({ email, password: 'password' })
        // Expect the response status code to be 201.
        .expect(201)
        // Expect the response body to have an 'id' and 'email' property.
        .then((res) => {
          // Destructure the 'id' and 'email' properties from the response body.
          const { id, email } = res.body;
          // Expect the 'id' variable to be defined.
          expect(id).toBeDefined();
          // Expect the 'email' variable to be defined.
          expect(email).toEqual(email);
        })
    );
  });
});
