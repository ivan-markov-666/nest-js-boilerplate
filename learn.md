# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added better error handling.

### Added to the project:  
1. Edited the 'src\users\users.service.ts' file. Replaced 'Error' object with 'NotFoundException' object. For more information, see the file.
2. 'findUser' method from 'src\users\users.controller.ts' file was updated. For more information, see the file.  
Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:  
Find a particular user with a given ID.
    > curl http://localhost:3000/auth/1

Delete a particular user with a given ID.
    > curl -X DELETE http://localhost:3000/auth/22123432

Update a user with a given ID.
    > curl -X PATCH -H "Content-Type: application/json" -d '{"email": "testingemailTest2@testingdomain.com"}' http://localhost:3000/auth/9