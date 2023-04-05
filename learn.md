# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
All project files ware deleted.  
A new project started from scratch.    

### Precondition  
1. Install @netsjs/cli on your OS.  

### Create a new NestJS project from the CLI.  
1. Create a new folder in a random place.  
2. Open the terminal and navigate to the newly created folder.  
3. Execute the following command in the folder:  
> nest new learningNestJs  
4. Finish the installation process.  
5. Open the project in your favorite IDE.  
6. Run the project with the following command:  
> npm run start:dev  
7. Open the browser and navigate to the following URL:  
> http://localhost:3000/  
8. You should see the following message:  
> Hello World!  
9. Stop the server.  
10. We will remove the default controller, service and module files.  
Delete the following files:  
> app.controller.ts  
> app.service.ts  
> app.module.ts  
11. We will generate a new module.  
12. Execute the following command in the terminal:  
> nest g module example  
13. You should see the following message:  
> CREATE src/example/example.module.ts  
14. Replace the app.module.ts file with example.module.ts in the main.ts file.  
15. We will generate a new controller.  
16. Execute the following command in the terminal:  
> nest g controller example/example --flat  
"nest g controller" - means generate controller.  
"example/example" - means the controller will be generated in the 'example' folder and call the class 'example'.  
"--flat" - means the controller will be generated in the 'example' folder and not in the 'example/example' folder.  
17. You should see the following message:  
> CREATE src/example/example.controller.ts  
> CREATE src/example/example.controller.spec.ts  
> UPDATE src/example/example.module.ts  
18. Update the example.controller.ts file. See the file for more details.  
19. Added REST Client extension to VS Code:  
> https://marketplace.visualstudio.com/items?itemName=humao.rest-client  
20. Create a new file in the root folder of the project.  
> example.http  
21. Start the server.  
22. Press the "Send Request" button in the VS Code (the button should be located between line 2 and 3 from the example.http file). You can test other requests too.  

!!! Alert !!!  
If you don't comment the .eslintrc.js file, you will get the following error:
> Unexpected empty method 'listText'.
> Unexpected empty method 'createText'.
> Unexpected empty method 'getText'.
Don't worry, the server will still work. We will fix this in the next lecture.