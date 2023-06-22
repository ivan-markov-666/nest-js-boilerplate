# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture: 
Created a relationship (associations) between 'Users' and 'Tasks' entities (one user can have many tasks).

### Added to the project:  
1. Added 'OneToMany' decorator to create a relationship between the 'Users' and 'Tasks' entities (one user can have many tasks) in the "src\users\users.entity.ts" file. For more details see the file.
2. Added 'ManyToOne' decorator to create a relationship between the 'Reports' and 'Users' entities (many reports can have one user) in the "src\reports\report.entity.ts" file. For more details see the file.
3. Delete 'db.sqlite3' file from the root folder. 
4. Start the server:
> npm run start:dev

5. You need to create a new user. You can create a new user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool.
6. You need to login with the user. You can login with the user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool.
7. Added '@CurrentUser' decorator to get the current user in the 'src\reports\reports.controller.ts' file. For more details see the file.
8. Added 'user' parameter to the 'create' function to create a report for the current user in the 'src\reports\reports.service.ts' file. For more details see the file.
9. Now we can test if the association works. Just follow that test case.  
Test Case :  
``` 1. Create a new user.```  
``` - You can create a new user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool. ```  
``` 2. Login with the user.```  
``` - You can login with the user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool.```  
``` 3. Now add new report to the user.```  
``` - You can create a new report from test located in the 'src\reports\request.http' file, or you can create a test using PostMan or other tool.```  
``` - The resposnse shold be "HTTP/1.1 201 Created" and should returns a JSON containing information about the 'id' of the record and information about the 'user' like 'id', 'email' and 'password'.```  
'password' is not needed to be included in the response. This is a problem. That problem and other issues will be fixed in the next branch.