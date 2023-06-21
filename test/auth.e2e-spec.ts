import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Authentication System', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', () => {
    const email = 'testingemail213ew3@qa4free.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email, password: 'password' })
      .expect(201)
      .then((res) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(email);
      });
  });

  // Add a test for signing up with a new user and then getting the currently logged in user.
  it('signup as a new user then get the currently logged in user', async () => {
    // Assign a email to a variable to use it in the test.
    const email = 'testingemail213ew2@qa4free.com';
    // Send a request and assign the response to a variable.
    const response = await request(app.getHttpServer())
      // Send a request to the signup endpoint.
      .post('/auth/signup')
      // Send the email and password in the body of the request.
      .send({ email, password: 'password' })
      // Expect a 201 status code.
      .expect(201);
    // Get the cookie from the response.
    const cookie = response.get('Set-Cookie');
    // Send a request to the whoami endpoint.
    const { body } = await request(app.getHttpServer())
      // Send the cookie in the header of the request.
      .get('/auth/whoami')
      // Set the cookie in the header of the request.
      .set('Cookie', cookie)
      // Expect a 200 status code.
      .expect(200);

    // Expect the body of the response to have the email that was sent in the signup request.
    expect(body.email).toEqual(email);
  });
});
