# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added mechanism to switch between different environments.  

### Added to the project:  
1. Replace the "TypeOrmModule.forRootAsync" method with "TypeOrmModule.forRoot" method to use the database connection from .env files in the 'src\app.module.ts' file. For more information, see the file.  
2. Added new file 'ormconfig.js' to the root directory. The file contains configuration for the environment parameters for the TypeORM. For more information, see the file.  
3. Start the server:  
> npm run start:dev

The server should start without errors.  
4. Test the API with executing 'Create a new user' test from the 'src\users\request.http' file.   
The results should be similar to:  
```
{
  "statusCode": 500,
  "message": "Internal server error"
}
```
That is fine, and we will fix it in the next lecture (branch).