# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture: 
Added '@nestjs/config' package to the project.
Added dotenv files in the root directory of the project.
Added new way to load the environment variables in the 'src\main.ts' file.
Added 'cross-env' package to the project.
Scripts related with 'start' and 'test' in the 'package.json' file were refactored.
A mechanism to delete the database before executing the e2e tests.

### Added to the project:  
1. Installed '@nestjs/config' package.
2. Created a '.env.development' and '.env.test' files in the root directory of the project.
3. Added 'ConfigModule' and 'ConfigService' to the 'src\app.module.ts' file.
4. Added 'ConfigModule.forRoot()' to the '@Module' decorator's 'imports' array to load the environment variables. See the 'src\app.module.ts' file for more details.
5. Added new way ('TypeOrmModule.forRootAsync()') to load the environment variables in the 'src\main.ts' file. See the 'src\main.ts' file for more details.
6. Installed 'cross-env' package.
7. The scripts related with 'start' and 'test' in the 'package.json' file were refactored. See the 'package.json' file for more details.
-   cross-env NODE_ENV=development was added to 'start', 'start:dev', 'start:debug', 'start:prod' scripts.
-   cross-env NODE_ENV=test was added to 'test', 'test:watch', 'test:cov', 'test:debug' scripts.
Now we need to test if the refactoring was done correctly. Open the terminal and run the command:
> npm run start:dev

The command above should start the NestJS application in the development environment.  
To verify that everything is working correctly, you can test the application from the 'src\users\request.http' file or with the following CURL commands:
> curl -X POST -H "Content-Type: application/json" -d '{"email":"testingemailTest22251ss6@testingdomain.com","password":"TestingPassword123!@#"}' http://localhost:3000/auth/signup

The response should be similar to the following:
{"id":1,"email":"testingemailTest22251ss6@testingdomain.com"}

8. Now we can test if the e2e tests are working correctly. Open the terminal and run the command:
> npm run test:e2e

The command above should start the e2e tests in the test environment.  
At that moment, the e2e tests should fail with the following error:
> [Nest] 41732  - 21.06.2023 г., 16:01:07 ч.   ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)...

9. Now we need to add '.env.development' and '.env.test' files to the '.gitignore' file, because we don't want to commit them to the repository (they contain sensitive data).  
!!! ALERT !!! We will not add the '.env.development' and '.env.test' files to the '.gitignore' file, because we want to commit them to the repository. We will do that, because we want to show you how to use the environment variables at all (this is for educational purposes only).
10. Now lets fix the 'Unable to connect to the database. Retrying (1)' error. But first lets understand why that error occurs. By default our test runner is Jest. So Jest will read two different spec files located in the 'test' folder. Jest try to run all spec files at the same time. That means Jest is trying to create two different connections to the database at the same time. But we have only one database. That's why the error occurs. Mysqlite doesn't support multiple connections to the same database.  
To fix that error we will tell Jest to not run tests in parallel.  
The 'test:e2e" test were updated with adding '--maxWorkers=1' option. See the 'package.json' file for more details.
11. Delate the 'test.sqlite' file from the root project folder.  
12. Now lets test again if the e2e tests are working correctly. Open the terminal and run the command:
> npm run test:e2e

In result there should not be any errors from the database.  
!!! ALERT !!! If we run the tests again, we will get an error. That occurs, because we are trying to insert the same email in the database.  
13. Now lets create a mechanism to delete the database before each test. Open the 'test\jest-e2e.json' file and add the following to the bottom of the json:
```  "setupFilesAfterEnv": ["<rootDir>/setup.ts"] ```

14. Now lets create the 'test\setup.ts' file and add code that will remove the sqlite database before each test. See the 'test\setup.ts' file for more details.
15. Now lets test again if the e2e tests are working correctly. Open the terminal and run the command:
> npm run test:e2e

The test should pass.

16. Now lets test it again, to make sure that the code is working correctly and the database is deleted before each test. Open the terminal and run the command:
> npm run test:e2e

The test should pass again.