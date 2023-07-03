# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Generate and execute the first migration.

### Added to the project:  
1. Added new script 'typeorm' to run the TypeORM CLI inside the 'package.json' file.  
2. Execute the following command in the root of the project:  
> npm run typeorm migration:generate -- -n initial-schema -o  

You should see the similar output in the console:  
```
Migration {PROJECT_PATH}/migrations/1688299806080-initial-schema.js has been generated successfully.  
``` 
That command will generate a new JS migration file with the name 'initial-schema' and the option '-o' will overwrite the existing migration file. The file will be placed in the folder described in the 'ormconfig.js' file (migrations). For more information, see the file.  

3. Now we have a migration to run on production. Execute the following command in the root of the project:  
> npm run typeorm migration:run  

We should see 'Migration initialSchema1688299806080 has been executed successfully.' message in the console after execution.  

4. Start the server:   
> npm run start:dev  

The server should start without errors.  
5. Test the API with executing 'Create a new user' test from the 'src\users\request.http' file.  
In result the new user should be created in the database.
