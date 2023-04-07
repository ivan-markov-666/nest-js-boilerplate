# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Example of extracting the requested data and assigning it to a variable.
Example of validating the requested data using pipes (validation pipes).  
Example of how to use the DTO (Data Transfer Object) pattern.

### Added to the project:
1. The example.controller.ts file was edited. See the file for more details.  
2. Start the server.  
3. Test the code by sending a request to the server:  
> curl -X POST -H "Content-Type: application/json" -d '{"text": "Hello World"}' http://localhost:3000/example  
Check the server's console for the response.  
> curl http://localhost:3000/example/1  
Check the server's console for the response.  
> curl http://localhost:3000/example/1243124234  
4. Tests in example.http file ware updated.  
5. The main.ts file was edited. See the file for more details.  
6. You may need to install the class-transformer package responsible for transforming the data:  
> npm install class-transformer  
7. Restart the server.  
8. New folder was created: 'src/example/dtos'.  
9. New file was created: 'src/example/dtos/create-example.dto.ts'. See the file for more details.  
10. Install the class-validator package responsible for validating the data:  
> npm install class-validator  
11. Restart the server.  
12. We need to edit the example.controller.ts file to apply the validation. See the file for more details.  
13. Test the code by sending a request to the server:  
> curl -X POST -H "Content-Type: application/json" -d '{"text": "Hello World"}' http://localhost:3000/example  
Check the server's console for the response. The response code should be 200.  
> curl -X POST -H "Content-Type: application/json" -d '{"text": 123}' http://localhost:3000/example  
Check the server's console for the response. The response code should be 400.  
14. The example.http file was updated. See the file for more details.  


!!! Alert !!!  
If you don't comment on the .eslintrc.js file, you will get the following error:  
> Unexpected empty method 'listText'.  
Don't worry, and the server will still work. We will fix this in the following lecture.  
