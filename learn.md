# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture: 
Change the response when we create a new report. Replaced 'user' information with 'userId' information.

### Added to the project:  
Here we will fix the problem with provided password to the response when we create a new report. To fix that we will replace the 'user' information with the 'userId' information.

1. Create new 'src\reports\dto\report.dto.ts' file. For more details see the file.
2. Added the 'Serialize' decorator to the 'createReport' method and pass in the 'ReportDto' class as an argument in the 'src\reports\reports.controller.ts' file. For more details see the file.
3. Start the server:
> npm run start:dev

4. Now we can test if the association works. Just follow that test case.  
Test Case :  
``` 1. Create a new user.```  
``` - You can create a new user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool. ```  
``` 2. Login with the user.```  
``` - You can login with the user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool.```  
``` 3. Now add new report to the user.```  
``` - You can create a new report from test located in the 'src\reports\request.http' file, or you can create a test using PostMan or other tool.```  
``` - The resposnse shold be "HTTP/1.1 201 Created" and should returns a JSON containing information about the 'id' of the record and information about the 'userId'.```  