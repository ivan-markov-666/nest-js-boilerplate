# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
The interceptor was set up globally.

### Added to the project:  
1. Remove the interceptor from the 'src\users\users.controller.ts' file.
2. Added globally scoped interceptors. The changes was made in the 'src\users\users.module.ts' file. For more details see the file.
3. Start the server by running the following command in the terminal:
> npm run start:dev

4. Test the code.  
To test the code we need to execute the following test case:
- Register new user by executing the 'POST /auth/signup' endpoint.
- Sign in by executing the 'POST /auth/signin' endpoint.
- Execute the 'GET /auth/whoami' endpoint to see the current user.
- Execute the 'POST /auth/signout' endpoint to sign out.
- Execute the 'GET /auth/whoami' endpoint to see the current user - there should not be any user.
You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:
> curl -X POST -H "Content-Type: application/json" -d '{"email":"testingemailTest222511@testingdomain.com","password":"TestingPassword123!@#"}' http://localhost:3000/auth/signup

The result will be similar to the following:
```
{"id":18,"email":"testingemailTest222511@testingdomain.com"}
```
To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl -X POST -H "Content-Type: application/json" -d '{"email":"testingemailTest222511@testingdomain.com","password":"TestingPassword123!@#"}' http://localhost:3000/auth/signin

The result will be similar to the following:
```
{"id":18,"email":"testingemailTest222511@testingdomain.com"}
```
To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl http://localhost:3000/auth/whoami

The result will be similar to the following:
```
{"id":18,"email":"testingemailTest22251@testingdomain.com"}
```
To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl -X POST http://localhost:3000/auth/signout

There will not be any result in the terminal. To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl http://localhost:3000/auth/whoami

There will not be any result in the terminal. Check the server terminal to see the message - there should not be any returned message. To see the cookies and other headers, you can use the 'src\users\request.http' file.