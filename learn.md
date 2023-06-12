# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Switched to use fake users service in the auth service unit tests.  
Added new test in 'auth.service.ts' file for checking if the signup method throws an error if the email is not used (not registered).  

### Added to the project:  
1. Some changes and added new test in 'auth.service.ts' file.  
- Refactored the 'fakeUsersService' from 'beforeEach' block to use a fake users service. 
- Added a test to ensure that the signup method throws an error if the email is not used (not registered).  
For more details see the file.  

2. Start the unit tests by running the following command in the terminal:  
> npm run test:watch  

And because we want to run single test file, we need select (press) the 'p' key and enter the name of the file. In our case it is 'auth.service.spec.ts' in the terminal:
> auth.service.spec.ts  

The test should pass.