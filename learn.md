# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture: 
Added new columns in the 'src\reports\report.entity.ts' file.
Created a new folder and file 'src\reports\dto\create-report.dto.ts'.
'reports.service.ts' was updated.
Added new 'src\reports\requests.http' file and test to it.

### Added to the project:  
1. Added new columns in the 'src\reports\report.entity.ts' file. For more details, see the file.
2. Create a new folder and file 'src\reports\dto\create-report.dto.ts'. For more details, see the file. Let's mention again how that DTO is working:
- Whenever the client sends a request to the server, the server will validate the request body with the DTO. If the request body is invalid, the server will respond with the status code 400 and the error message.
3. The 'src\reports\reports.service.ts' file was updated. 
- Added the 'constructor' method to inject the repository into the service class.
- Added the 'create' method to create a new report.
For more details, see the file.
4. Now, we need to test the code. To do that, we will create a new file, 'src\reports\requests.http'. If you want, you can also test the code with Postman or another tool. 
- Added tests to the 'src\reports\requests.http' file. For more details, see the file.
5. Start the server:
> npm run start:dev

6. To make a valid test, you need to follow the test case:  
Test Case :  
``` 1. Create a new user.```  
``` - You can create a new user from the test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tools. ```  
``` 2. Log in with the user.```  
``` - You can log in with the user from the test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tools.```  
``` 3. Now you can try the new test.```  
``` - You can create a new report from the test located in the 'src\reports\request.http' file, or you can create a test using PostMan or other tools.```  
``` - The response should be "HTTP/1.1 201 Created"```  
``` 4. Sign out a user.```  
``` - You can sign out from the test located in the 'src\users\request.http' file, or you can create a test using PostMan or other tools.```  
``` 5. Try the test again.```  
``` - You can create a new report from the test located in the 'src\reports\request.http' file, or you can create a test using PostMan or other tools.```  
``` - The response should be "HTTP/1.1 403 Forbidden"```  
