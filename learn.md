# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
The password was excluded from the response body, when we try to find a user by ID using NestJS recomnended solution for hiding sensitive data.

### Added to the project:  
1. Edited the 'src\users\user.entity.ts' file. Added the '@Exclude()' decorator to the 'password' property. For more information, see the file.
2. Updated the 'src\users\users.controller.ts' file. Added the '@UseInterceptors(ClassSerializerInterceptor)' decorator to the 'UsersController' class. For more information, see the file.
3. Start the server by running the following command in the terminal:  
    > npm run start:dev

4. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:  
Find a particular user with a given ID.
    > curl http://localhost:3000/auth/9