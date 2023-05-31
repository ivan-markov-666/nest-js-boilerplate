# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Changed the way for providing the current user's session, by adding a custom decorator.


### Added to the project:  
1. The 'whoami' endpoint was commented out in the 'app.controller.ts' file. A new 'whoami' endpoint was added to the 'app.controller.ts' file. The new endpoint is calling a custom decorator 'CurrentUser' which is defined in the 'src\users\decorators\current-user.decorator.ts' file. For more details see the file.
2. A new folder 'src\users\decorators' was created. A new file 'current-user.decorator.ts' was created in the 'src\users\decorators' folder. The 'CurrentUser' decorator is defined in the 'current-user.decorator.ts' file. For more details see the file.
3. Start the server by running the following command in the terminal:
> npm run start:dev

4. Test the code. You can use the 'src\users\request.http' file to test the code or you can execute the following cURL command in the terminal:
> curl http://localhost:3000/auth/whoami

The result will be:
```
testing message
```
