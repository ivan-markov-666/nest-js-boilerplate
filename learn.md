# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Refactored some tests because of Jest update.

### Added to the project:  
1. Three tests were refactored:  
- throws an error if user signs up with email that is in use  
- throws if signin is called with an unused email  
- throws if an invalid password is provided  
For more details see the file.  
2. Start the unit tests by running the following command in the terminal:  
> npm run test:watch  

And because we want to run single test file, we need select (press) the 'p' key and enter the name of the file. In our case it is 'auth.service.spec.ts' in the terminal:
> auth.service.spec.ts  

The test should pass.