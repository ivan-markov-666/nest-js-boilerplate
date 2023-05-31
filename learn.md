# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
1. The example of using cookies was removed from the 'app.controller.ts' and 'request.http' files.
2. The cookie-session was added to the 'signup' and 'signin' endpoints.
3. The 'whoami' endpoint was added to the 'app.controller.ts' file for checking the current user's session.
4. The 'signout' endpoint was added to the 'app.controller.ts' file for removing the current user's session.

### Added to the project:  
1. Removed the endpoints '/colors/:color' and '/colors' from the 'app.controller.ts' file. Removed the related tests from the 'request.http' file.
2. The '/singup' and '/signin' endpoints are now using the 'cookie-session' middleware. For more details see the file.
3. Start the server by running the following command in the terminal:
> npm run start:dev

4. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:
> curl -X POST -H "Content-Type: application/json" -d '{"email":"testingemailTest2225@testingdomain.com","password":"TestingPassword123!@#"}' http://localhost:3000/auth/signup

The result will be similar to the following:
```
{"id":16,"email":"testingemailTest2225@testingdomain.com"}
```
To see the cookies and other headers, you can use the 'src\users\request.http' file.

> curl -X POST -H "Content-Type: application/json" -d '{"email":"testingemailTest2225@testingdomain.com","password":"TestingPassword123!@#"}' http://localhost:3000/auth/signin

The result will be similar to the following:
```
{"id":16,"email":"testingemailTest2225@testingdomain.com"}
```
To see the cookies and other headers, you can use the 'src\users\request.http' file.

5. Added new endpoint 'whoami' to the 'app.controller.ts' file. For more details see the file.

6. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL command in the terminal:
> curl http://localhost:3000/auth/whoami

The result will be similar to the following:
```
{"id":3,"email":"testingemail@testingdomain.com"}
```

To see the cookies and other headers, you can use the 'src\users\request.http' file.

7. Added '/signout' endpoint to the 'app.controller.ts' file. For more details see the file.

8. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL command in the terminal:
> curl -X POST http://localhost:3000/auth/signout

There will not be any result in the terminal. To see the cookies and other headers, you can use the 'src\users\request.http' file.

But there is a problem. We will see it if we try to get the current user's session by executing the following cURL command in the terminal:
> curl http://localhost:3000/auth/whoami

The result will be similar to the following:
```
{"id":3,"email":"testingemail@testingdomain.com"}
```

To see the cookies and other headers, you can use the 'src\users\request.http' file.

9. To fix that issue, we need to add a validation in the 'users.service.ts' file. If the user is not found, we need to return 'null'. For more details see the file.

Now if we try to get the current user's session by executing the following cURL command in the terminal:
> curl http://localhost:3000/auth/whoami

There will not be any result in the terminal. To see the cookies and other headers, you can use the 'src\users\request.http' file.