# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture: 
Added authorization guard.
Added globbal middleware to set the 'currentUser' property of the 'request' object.

### Added to the project:  
1. Added new 'admin' column in the 'src/users/users.entity.ts' file. For more details see the file.
!!! Alert !!! Folder 'src\users\guards\' were moved to 'src\guards\' folder. For more details see the file.
2. Added new file 'src\guards\admin.guard.ts'. A new method was added there. That method will be used to determine whether or not a user can access a route. For more details see the file.
3. Added the 'AdminGuard' guard to the 'approvedReport' method inside the 'src\reports\reports.controller.ts' file. For more details see the file.
4. Added new file 'src\users\middlewares\current-user.middleware.ts' file. The file contains a middleware that will be used to set the 'currentUser' property of the 'request' object.
5. Added the global middleware to the 'src\users\users.module.ts' file. For more details see the file.
6. Start the server:
> npm run start:dev

4. Now we can test if the association works. Just follow that test case.  
Test Case :  
``` 1. Create a new user.```  
``` - You can create a new user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool. ```  
``` 2. Login with the user.```  
``` - You can login with the user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool.```  
``` 3. Now add new report to the user.```  
``` - You can add the report to the user from test located in the 'src\reports\request.http' file, or you can create a test using PostMan or other tool.```  
``` - The resposnse shold be "HTTP/1.1 201 Created", but the report should not be approved.```  
``` 4. Approve the report. ```  
``` - You can approve the report from test located in the 'src\reports\request.http' file, or you can create a test using PostMan or other tool.```  
``` - The resposnse shold be "HTTP/1.1 200 OK", and the report should be approved.```  