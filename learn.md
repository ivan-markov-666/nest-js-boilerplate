# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
In that lecture, we will learn how to use the 'SerializeInterceptor' class to return only the 'user' and 'email' fields in the response. The 'password' field should not be returned in the response.  

### Added to the project:  
1. Added 'SerializeInterceptor' class to the 'user.controller.ts' file. For more information, see the file.
2. Implemented the 'SerializeInterceptor' class in the 'user.controller.ts' file. For more information, see the file.
3. Start the server by running the following command in the terminal:  
    > npm run start:dev  

4. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:  
Find a particular user with a given ID.  
    > curl http://localhost:3000/auth/9  

The response should be the same like in previous lecture.  
The response should contains information for 'id' and 'email' fields. The 'password' field should not be returned in the response.   
See the terminal for more details.  
The terminal should contains console logs like the following:  
    > handler is running