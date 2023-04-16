# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added log methods. See what is the behavior when we provide objects in 'save' method and what is the behavior when we provide parameters in 'save' method.

### Added to the project:  
1. Edited the 'src\users\users.entity.ts' file. Added log methods. For more information, see the file.
2. Start the server with the command:
    > npm run start:dev

Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal: 
 
curl -X POST http://localhost:3000/auth/signup -H 'Content-Type: application/json' -d '{"email": "testingemail3@testingdomain.com", "password": "TestingPassword123!@#"}'
Check the DB table for the new record. Check lecture 7 for more details.  
Review the logs in the terminal. You should see the following logs:  
'User with id '{id}' has been inserted'
3. Edited the 'src\users\users.service.ts' file. The update methhod was removed, and the parameters 'email' and 'password' were added to the 'save' method. For more information, see the file.
4. Restart the server with the command:
    > npm run start:dev
Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal: 
 
curl -X POST http://localhost:3000/auth/signup -H 'Content-Type: application/json' -d '{"email": "testingemail3@testingdomain.com", "password": "TestingPassword123!@#"}'
Check the DB table for the new record. Check lecture 7 for more details.  
Review the logs in the terminal. You should not see any custom logs. This is happening, because we delated the 'create' method and added the 'email' and 'password' parameters to the 'save' method.  