# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
The NestJS recomended solution for hiding sensitive data was removed. 
Created basic serializer.

### Added to the project:  
1. Edited the 'src\users\user.entity.ts' file. Removed the '@Exclude()' decorator. For more information, see the file.
2. Created a new file 'src\users\user.serializer.ts'. For more information, see the file.
3. Update the 'src\users\users.controller.ts' file. Added the '@UseInterceptors(SerializeInterceptor)' decorator to the 'UsersController' class. For more information, see the file.
4. Start the server by running the following command in the terminal:  
    > npm run start:dev

5. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:  
Find a particular user with a given ID.
    > curl http://localhost:3000/auth/9