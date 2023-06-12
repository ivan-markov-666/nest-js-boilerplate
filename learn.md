# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added two new tests for signin with an email that it is in use and signin with a valid email and invalid password.

### Added to the project:  
1. Added two new tests:  
- Added a test for signin with an email that it is in use.  
- Added a test for signin with a valid email and invalid password.  
For more details see the file.  

2. Start the unit tests by running the following command in the terminal:  
> npm run test:watch  

And because we want to run single test file, we need select (press) the 'p' key and enter the name of the file. In our case it is 'auth.service.spec.ts' in the terminal:
> auth.service.spec.ts  

The test should pass.