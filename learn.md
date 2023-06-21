# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
'src\setup-app.ts' file was deleted.
'src\main.ts' file was returned to the original state (before the refactoring).
Setup a global validation pipe in the NestJS way.
Setup a global cookies session middleware in the NestJS way. 

### Added to the project:  
1. The integration test example in the 'test\auth.e2e-spec.ts' was refactored to use the NestJS way to run the integration tests.
2. Setup a global pipe in the 'src\app.module.ts' file. Moving the 'ValidationPipe' method from the 'src\main.ts' file to the 'src\app.module.ts' file.
3. Setup a global cookie-session middleware in the 'src\app.module.ts' file. Moving the 'cookieSession' method from the 'src\main.ts' file to the 'src\app.module.ts' file.
4. Start the integration tests with the command:  
> npm run test:e2e  