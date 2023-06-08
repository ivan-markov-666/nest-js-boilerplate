# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
1. Added guard file and implemented the 'AuthGuard' class.
2. Added the 'UseGuards' decorator to the controller class and imported the 'AuthGuard' class into it.

### Added to the project:  
1. Create new folder 'src\users\guards' and add new file 'auth.guard.ts' in it. For more details see the file.  
2. In 'users.controllet.ts' file:  
- Add the 'UseGuards' decorator to the controller class.  
- Import the 'AuthGuard' class.  
For more details see the file.  
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
> curl -X POST -H "Content-Type: application/json" -d '{"email":"testingemailTest222512@testingdomain.com","password":"TestingPassword123!@#"}' http://localhost:3000/auth/signup

The result will be similar to the following:
```
{"id":19,"email":"testingemailTest222511@testingdomain.com"}
```
To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl -X POST -H "Content-Type: application/json" -d '{"email":"testingemailTest222512@testingdomain.com","password":"TestingPassword123!@#"}' http://localhost:3000/auth/signin

The result will be similar to the following:
```
{"id":19,"email":"testingemailTest222511@testingdomain.com"}
```
To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl http://localhost:3000/auth/whoami

!!! ALERT !!! The result will be similar to the following:
```
{"statusCode":403,"message":"Forbidden resource","error":"Forbidden"}
```
The reason for that is because the curl and the browser are working in different ways. The curl does not save the cookies and does not send them back to the server. To see the cookies and other headers, you can use the 'src\users\request.http' file or edit the curl to store the cookie in txt file located on your HDD.
To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl -X POST http://localhost:3000/auth/signout

There will not be any result in the terminal. To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl http://localhost:3000/auth/whoami

The result will be similar to the following:
```
{"statusCode":403,"message":"Forbidden resource","error":"Forbidden"}
```
To see the cookies and other headers, you can use the 'src\users\request.http' file.