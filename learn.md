# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added new file 'auth.service.ts' to the 'users' folder. The file contains singup and signin methods.
Imported the 'AuthService' class to the 'users.module.ts' and 'user.controller.ts' files.

### Added to the project:  
1. Added new file 'auth.service.ts' to the 'users' folder. For more information, see the file.  
2. Imported the 'AuthService' class to the 'users.module.ts' file. For more information, see the file.
3. Imported the 'AuthService' class to the 'user.controller.ts' file. For more information, see the file.
4. Start the server by running the following command in the terminal:  
    > npm run start:dev  

5. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:  
Find a particular user with a given ID.  
    > curl -X POST -H "Content-Type: application/json" -d '{"email": "testingemailTest22233@testingdomain.com", "password": "TestingPassword123!@#"}' http://localhost:3000/auth/signup

The responses should be:
    > {"id":11,"email":"testingema3223ilTest@testingdomain.com"}
    
The server console should show "User with id '11' has been inserted" or something similar.

6. Open the user's table in the database and check if the user was added to the table with hashed password.  
7. Add 'signin' method to the 'auth.service.ts' file. For more information, see the file.  
8. Add a new route handler for the '/signin' route. For more information, see the file.  
9. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL commands in the terminal:  
Create a new user.  
    > curl -X POST -H "Content-Type: application/json" -d '{"email": "testingemailTest1231qwa@testingdomain.com", "password": "TestingPassword123!@#"}' http://localhost:3000/auth/signup  

The response should be:  
    > {"id":12,"email":"testingemailTest1231qwa@testingdomain.com"}  
    
Sign in with the newly created user:    
    > curl -X POST -H "Content-Type: application/json" -d '{"email": "testingemailTest1231qwa@testingdomain.com", "password": "TestingPassword123!@#"}' http://localhost:3000/auth/signin

    The response should be:
    > {"id":12,"email":"testingemailTest1231qwa@testingdomain.com"} 

    The server console should show "User with id '12' has been inserted" or something similar.  

Try to signin with wrong password:  
    > curl -X POST -H "Content-Type: application/json" -d '{"email": "testingemailTest1231qwa@testingdomain.com", "password": "WrongPassword123!@#"}' http://localhost:3000/auth/signin

    The response should be:
    > {"statusCode":400,"message":"Bad password","error":"Bad Request"}

Try to signin with wrong email:
    > curl -X POST -H "Content-Type: application/json" -d '{"email": "wrongemailaddress@testingdomain.com", "password": "TestingPassword123!@#"}' http://localhost:3000/auth/signin

        The response should be:
    > {"statusCode":400,"message":"Bad password","error":"Bad Request"}