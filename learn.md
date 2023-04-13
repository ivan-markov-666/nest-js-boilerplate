# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added new packages to the project.
Created connection to the database.
Created basic user signup functionality (user controller).

### Added to the project:  
1. Created a new nestjs project by running the following command in the root of the project:  
    > nest new nestjs-typeorm
2. Installed the `@nestjs/typeorm`, `typeorm` and `sqlite3` packages, by running the following command in the root of the project:  
    > npm i @nestjs/typeorm typeorm sqlite3
3. Edited the 'app.module.ts' file. Import the `TypeOrmModule` and `TypeOrmModule.forRoot()` functions. See the file for more details.
4. Start the application by running the following command in the root of the project:  
    > npm run start:dev
5. When the application started, a new file will be created in the root of the project. The file name is 'database.sqlite'. This file is the database file. The database file is created automatically by the `typeorm` package. That file will be used to store the data.
6. Created a new file in the users folder. The file name is 'user.entity.ts'. See the file for more details.
7. Edited the 'user.module.ts' file. See the file for more details.
8. Edited the 'app.module.ts' file. Import the `User` and add it to the `imports` array. See the file for more details.
9. Added 'report.entity.ts' file to the reports folder. See the file for more details.
10. Edited the 'report.module.ts' file. Imported 'TypeOrmModule' and added the 'Report' entity to the 'imports' array. See the file for more details.
11. Edited the 'app.module.ts' file. Added the 'Report' entity to the 'imports' array. See the file for more details.
12. To review the 'database.sqlite' file, you need to install extra software. One easy solution is to add 'SQLite' extension to the 'VSCode' editor. You can find the extension in the 'VSCode' editor's marketplace.  
    > https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite
13. Open the 'database.sqlite' file in the 'SQLite' extension. You will see the 'users' and 'reports' tables.
14. Edited the 'main.ts' file. Added the 'create' ValidationPipe to the 'app' object. See the file for more details.
15. Created new folder in the 'users' folder. The folder name is 'dto'.
16. Stop the API server. Install the 'class-validator' and 'class-transformer' packages, by running the following command in the root of the project:  
    > npm i class-validator class-transformer
17. Created new file in the 'dto' folder. The file name is 'create-user.dto.ts'. See the file for more details.
18. Edited the 'user.controller.ts' file. See the file for more details.
19. Start the API server. Run the following command in the root of the project:  
    > npm run start:dev
20. Test the code. A new file 'request.http' was created in the 'users' folder. That file contains the requests that were used to test the code. You can use that file to test the code or you can execute the following cURL commands in the terminal:  
    > curl -X POST http://localhost:3000/auth/signup -H 'Content-Type: application/json' -d '{"email": "testingemail@testingdomain.com", "password": "TestingPassword123!@#"}'
