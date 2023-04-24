# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added basic interceptor to the project. The interceptor is used to remove the password field from the response.

### Added to the project:  
1. The 'src\users\users.entity.ts' file was updated. We removed the 'Exclude()' decorator from the 'password' field, because we will do it by another solution. For more information, see the file.  
2. Added 'src\users\interceptors\serialize.interceptor.ts' file. The file contains the 'SerializeInterceptor' class. The class is used to remove the password field from the response. For more information, see the file.  
3. The 'src\users\users.controller.ts' file was updated. We added the 'UseInterceptors(SerializeInterceptor)' decorator to the 'UsersController' class. For more information, see the file.
3. Start the server by running the following command in the terminal:  
    > npm run start:dev

4. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:  
Find a particular user with a given ID.
    > curl http://localhost:3000/auth/9

See the terminal for more details.
The terminal should contains console logs like the following:
    > I am running before the handler
    > I am running before the response is sent out