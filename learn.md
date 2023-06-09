# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Getting TypeScript to help with mocks. By that way we will be able to mock the 'AuthService' class and test it with fake data.
The script for running the unit tests was updated in the 'package.json' file.

### Added to the project:  
1. Added 'Partial' to the fakeUsersService object to mock the UsersService dependency in the AuthService class in the 'auth.service.spec.ts' file. For more details see the file.
2. For easy testing, we can add '--maxWorkers=1' to the package.json file in the 'test:watch' script. For more details see the file. 'maxWorkers' is used to limit the number of workers used to run the tests. By default, the number of workers is based on the number of cores available on your machine. If you want to run tests in parallel, set the maxWorkers option to a number higher than 1. For more details see the [Jest documentation](https://jestjs.io/docs/en/cli#--maxworkersnum).
3. Start the unit tests by running the following command in the terminal:  
> npm run test:watch  

And because we want to run single test file, we need select (press) the 'p' key and enter the name of the file. In our case it is 'auth.service.spec.ts' in the terminal:
> auth.service.spec.ts  

The test should pass.