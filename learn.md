# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Updated the 'auth.service.spec.ts' file. Added 'describe' and 'beforeEach' blocks. Added 'Partial' to the fakeUsersService object to mock the UsersService dependency in the AuthService class.

### Added to the project:  
1. Updated the 'auth.service.spec.ts' file. Added 'describe' and 'beforeEach' blocks. Added 'Partial' to the fakeUsersService object to mock the UsersService dependency in the AuthService class.  
Inside the block move the 'fakeUserService' and 'module' variables from the 'it' block. By that approach, we can use the 'fakeUserService' in all 'it' blocks (the code inside the 'beforeEach' block will run before each 'it' block). For more details see the file.
2. Start the unit tests by running the following command in the terminal:  
> npm run test:watch  

And because we want to run single test file, we need select (press) the 'p' key and enter the name of the file. In our case it is 'auth.service.spec.ts' in the terminal:
> auth.service.spec.ts  

The test should pass.