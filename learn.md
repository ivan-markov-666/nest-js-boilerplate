# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
In that lecture we will learn why to move the @Serialize decorator from the handler to the controller level. We will also learn how to add basic type checking to the 'serialize.interceptor.ts' file.

### Added to the project:  
1. Move the @Serialize decorator from the handler to the controller level in the 'user.controller.ts' file. For more information, see the file.
2. Start the server by running the following command in the terminal:  
    > npm run start:dev  

3. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:  
Find a particular user with a given ID.  
    > curl http://localhost:3000/auth/9  
    > curl http://localhost:3000/auth?email=testingemail@testingdomain.com
    > curl -X PATCH -H "Content-Type: application/json" -d '{"email": "testingemailTest2@testingdomain.com"}' http://localhost:3000/auth/9


The responses should not contain the 'password' field.  
4. Added 'ClassConstructor' to the 'serialize.interceptor.ts' file. Changed the type from 'any' to 'ClassConstructor' to make sure that the dto is a class constructor. For more information, see the file.
5. To test the type of the dto, change 'UserDto' to 'any' random value from 'user.controller.ts' file. It will throw an error. For more information, see the file.