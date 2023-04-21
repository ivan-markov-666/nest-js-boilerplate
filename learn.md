# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added 'update' and 'remove' methods inside 'src\users\users.service.ts' file.
Added 'findUser', 'findAllUsers', 'delete' and 'updateUser' methods inside 'src\users\users.controller.ts' file.
Added new DTO file 'src\users\dto\update-user.dto.ts'. This file contains the data transfer object for the 'update' method.

### Added to the project:  
1. Edited the 'src\users\users.service.ts' file. Added two methods: 'update' and 'remove'. For more information, see the file.  
2. Edited the 'src\users\users.controller.ts' file. Added four methods: 'findUser', 'findAllUsers', 'delete' and 'updateUser'. For more information, see the file.  
3. Added new DTO file 'src\users\dto\update-user.dto.ts'. This file contains the data transfer object for the 'update' method. For more information, see the file.
3. Start the server with the command:
    > npm run start:dev

Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal: 
Find a particular user with a given ID.
    > curl http://localhost:3000/auth/1

Find all users with a given email (change the email address with real data, that exists in the database).
    > curl http://localhost:3000/auth?email=testingemail@testingdomain.com
    
Delete a particular user with a given ID.
    > curl -X DELETE http://localhost:3000/auth/22123432

Update a user with a given ID.
    > curl -X PATCH -H "Content-Type: application/json" -d '{"email": "testingemailTest2@testingdomain.com"}' http://localhost:3000/auth/9
