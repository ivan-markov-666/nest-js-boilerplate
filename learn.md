# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Changed the 'cookieSession' string. Added mechanism for getting a value for the 'cookieSession' string from '.env' files.

### Added to the project:  
We need to change the 'cookieSession' 'keys' from the 'src\app.module.ts' file. We can use .env files to store the keys.  
1. Add new 'COOKIE_KEY' property to the '.env.test' and '.env.development' files. Add different values for each file.  
2. Call the newly added 'COOKIE_KEY' property in the 'cookieSession' from 'src\app.module.ts' file. For more details see the file.
3. To verify that the 'cookieSession' works, just check the server console. The server should be running.