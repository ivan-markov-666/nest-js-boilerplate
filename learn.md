# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Example of using services.  
Example of using repositories.  

### Added to the project:  
1. Added new service file: './example/example.service.ts'.  
2. Added new repository file: './example/example.repository.ts'.  
3. Added new code to the repository file: './example/example.repository.ts'. See the file for more details.  
4. Added new code to the service file: './example/example.service.ts'. See the file for more details.  
5. Added new json file at the root of the project: './example.json'. In this file, we will store the data that we will send from the client to the server.  
6. Added new code to the controller file: './example/example.bad-practice.service.ts'. See the file for more details.  
7. Updated './example/example.controller.ts' file. See the file for more details.  
8. Start the server and test the new code by executing the following cURL commands:  
> curl http://localhost:3000/example  

Check the server's console for the response. The response should be empty object.  

> curl -X POST -H "Content-Type: application/json" -d '{"text":"Hello World"}' http://localhost:3000/example 

Check the server's console for the response. This should send the data that we sent from the client to the server.  

> curl http://localhost:3000/example  

Check the server's console for the response. Now the response should be the data that we sent from the client to the server.  

> curl http://localhost:3000/example/583  

Check the server's console for the response. Now the response should be record for the id that we sent from the client to the server. You need to change the id to the id that you have in the './example.json' file.  

At this state, if we try to call id that doesn't exist, we will recieve "200 OK" response. This is not good. We need to return "404 Not Found" response. We will do it in the next lecture.  

> curl -i http://localhost:3000/example/5831231231232134234234  

Check the server's console for the response. Now the response should be "200 OK" response.  