# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture: 
Added new columns in the 'src\reports\report.entity.ts' file.
Created new folder and file 'src\reports\dto\create-report.dto.ts'.
'reports.service.ts' was updated.
Added new 'src\reports\requests.http' file and test to it.

### Added to the project:  
1. Added new columns in the 'src\reports\report.entity.ts' file. For more details see the file.
2. Created new folder and file 'src\reports\dto\create-report.dto.ts'. For more details see the file. Let mention again how that DTO is working:
- Every time when the client sends a request to the server, the server will validate the request body with the DTO. If the request body is not valid, the server will send a response with the status code 400 and the error message.
3. The 'src\reports\reports.service.ts' file was updated. 
- Added 'constructor' method to inject the repository into the service class.
- Added 'create' method to create a new report.
For more details see the file.
4. Now we need to test the code. To do that we will create a new file 'src\reports\requests.http'. If you want you can test the code with Postman or other tool as well. 
- Added tests to the 'src\reports\requests.http' file. For more details see the file.
5. Start the server:
> npm run start:dev

6. To make a valid test you need to follow that test case:
Test Case :
``` 1. Create a new user.```  
``` - You can create a new user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool. ```  
``` 2. Login with the user.```  
``` - You can login with the user from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool.```  
``` 3. Now you can try the new test.```  
``` - You can create a new report from test located in the 'src\reports\request.http' file, or you can create a test using PostMan or other tool.```  
``` - The resposnse shold be "HTTP/1.1 201 Created"```  
``` 4. Sign out a user.```  
``` - You can sign out from test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tool.```  
``` 5. Try the test agai.```  
``` - You can create a new report from test located in the 'src\reports\request.http' file, or you can create a test using PostMan or other tool.```  
``` - The resposnse shold be "HTTP/1.1 403 Forbidden"```  
