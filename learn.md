# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Get the request object in the custom decorator.

### Added to the project:  
1. Get the request object from NestJS context object (which is the 2nd argument of the decorator) and then get the session object from the request object.
2. Print the request object and the session object to the console. For more details see 'src\users\decorators\current-user.decorator.ts' file.
3. Start the server by running the following command in the terminal:
> npm run start:dev

4. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal (you need to sign in, then you need to check the user in the session):
> curl -X POST -H "Content-Type: application/json" -d '{"email":"testingemailTest222@testingdomain.com","password":"TestingPassword123!@#"}' http://localhost:3000/auth/signup
> curl http://localhost:3000/auth/whoami

The result will be:
```
testing message
```

To see the result of the 2nd cURL command, review the terminal where the NestJS server is running. You will see the following output:
```
request.session.userId 15
```