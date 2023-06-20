# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added new 'test\auth.e2e-spec.ts' file.
Added new 'src\setup-app.ts' file.
Refactored 'src\main.ts' file.

### Added to the project:  
1. Added new example of integration test in the 'test\auth.e2e-spec.ts'.  
2. 'app.use' and 'app.useGlobalPipes' moved from 'src\main.ts' to newly added 'src\setup-app.ts' file. The idea is to make the 'main.ts' file as simple as possible. And we want to use 'app.use' and 'app.useGlobalPipes' in the 'test\auth.e2e-spec.ts' file (in the integration tests). So 'src\main.ts' file was refactored.  
3. Start the integration tests with the command:  
> npm run test:e2e  

!!! ALert. This is not the NestJS way to run the integration tests. We will learn how to run the integration tests in the NestJS way in the next lecture.