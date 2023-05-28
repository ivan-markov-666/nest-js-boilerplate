# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Add example of using the 'cookie-session' middleware.

### Added to the project:  
1. Added two new endpoints '/colors/:color' and '/colors' to the 'app.controller.ts' file. For more details see the file.
2. Added two new examples in the 'request.http' file. For more details see the file.
3. Start the server by running the following command in the terminal:
> npm run start:dev
 
4. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:
> curl -X GET http://localhost:3000/auth/colors/red
> curl -X GET http://localhost:3000/auth/colors

The stored cookies should be: red

With first request, we are sending a cookie with the name 'color' and value 'red'. With the second request, we are reading the cookie and sending it back to the client. We will not be able to see the cookie in the response. For testing you can use 'request.http' file.
