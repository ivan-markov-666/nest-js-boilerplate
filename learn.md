# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
user.service.ts file was updated. It contains the user service class. The class contains the constructor and the create method. The constructor is used to inject the user repository. The create method is used to create a new user. The method uses the user repository to create a new user. The method returns the created user.

### Added to the project:  
1. Edited the 'src\users\users.service.ts' file. Added constructor and create method. See the file for more details.
2. Edited the 'src\users\users.controller.ts' file. See the file for more details.
3. Start the server with the command:
    > npm run start:dev
4. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:
curl -X POST http://localhost:3000/auth/signup -H 'Content-Type: application/json' -d '{"email": "testingemail3@testingdomain.com", "password": "TestingPassword123!@#"}'
5. Check the DB table for the new record. Check lecture 7 for more details.