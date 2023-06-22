# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture: 
Added mechanism to approve the report. By default, the report is not approved. When the report is approved, the 'approved' property should be set to 'true'.

### Added to the project:  
1. Added new 'approved' property to the 'src\reports\report.entity.ts' file. For more details see the file.
2. Created new 'src\reports\dto\approve-report.dto.ts' file. For more details see the file.
3. Added new PATCH endpoint, used to approve a report.
4. Added 'changeApproval' method, used to approve a report, by providing the 'id' of the report and the 'approved' property. The method was added in the 'src\reports\reports.service.ts' file. For more details see the file.
5. Added 'approved' property in the 'src\reports\dto\report.dto.ts' file, used to determine whether a report has been approved or not. For more details see the file.
5. Start the server:
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
``` - The resposnse shold be "HTTP/1.1 201 Created", and the report should be approved.```  