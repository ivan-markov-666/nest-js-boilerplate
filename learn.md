# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Example of using services.  
Example of using repositories.  

### Added to the project:  
1. Added new service file: './example/example.service.ts'.  
2. Added new repository file: './example/example.repository.ts'.  
3. Added new code to the repository file: './example/example.repository.ts'. See the file for more details.  
4. Added new code to the service file: './example/example.service.ts'. See the file for more information.  
5. Added a new JSON file at the project's root: './example.json'. In this file, we will store the data sent from the client to the server.  
6. Added new code to the controller file: './example/example.bad-practice.service.ts'. See the file for more details.  
7. Updated './example/example.controller.ts' file. See the file for more details.  
8. Start the server.
9. Test the new code. The './example.http' file was updated. Or you can test by executing the following cURL commands:  
> curl http://localhost:3000/example  

Check the server's console for the response. The response should be an empty object.  

> curl -X POST -H "Content-Type: application/json" -d '{"text":"Hello World"}' http://localhost:3000/example 

Check the server's console for the response. That should send the data that we sent from the client to the server.  

> curl http://localhost:3000/example  

Check the server's console for the response. The response should now be the data we sent from the client to the server.  

> curl http://localhost:3000/example/583  

Check the server's console for the response. Now the response should be recorded for the id that we sent from the client to the server. You must change the id to the id in the './example.json' file.  

At this state, if we try to call an id that doesn't exist, we will receive a "200 OK" response. That could be better. We need to return a "404 Not Found" response. We will do it in the following lecture.  

> curl -i http://localhost:3000/example/5831231231232134234234  

Check the server's console for the response. Now the response should be "200 OK" response.  
