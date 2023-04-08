# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Refactoring the code to use '@Injectable()' decorator.  

### Added to the project:  
1. Now lets refactor the code to use '@Injectable()' decorator.
2. Edited the 'example.service.ts' file. See the file for more details.
3. Edited the 'example.controller.ts' file. See the file for more details.
4. Edited the 'example.module.ts' file. See the file for more details.
5. Edited the 'example.repository.ts' file. See the file for more details.
6. Start/Restart the server.
7. Test the new code. You can test it from './example.http' file. Or you can test by executing the following cURL commands:

> curl http://localhost:3000/example -X GET

Check the server's console for the response. The response should be a JSON array with the data stored in the JSON file.

> curl http://localhost:3000/example -X POST -H "Content-Type: application/json" -d '{"text": "New Hello World"}'

Check the server's console for the response. The response should be the id of the new data.

> curl http://localhost:3000/example/583 -X GET

Check the server's console for the response. The response should be the data with the id of 583.

> curl -i http://localhost:3000/example/5831231231232134234234  

Check the server's console for the response. Now the response should be "404 Not Found".  