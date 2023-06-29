# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added new 'GET' route to the 'src\reports\reports.controller.ts' file responsible for getting an estimate for an existing vehicle.  

### Added to the project:  
1. Added 'src\reports\dto\get-estimate.dto.ts' file. The file contains a DTO class that will be used to validate the request body of the 'getEstimate' method. For more details see the file.  
2. Added new 'GET' route to the 'src\reports\reports.controller.ts' file. For more details see the file.  
3. Added new 'Get an estimate for and existing vehicle' example to the 'src\reports\requests.http' file.  
4. Start the server:  
> npm run start:dev

5. Now we can test if the 'Get an estimate for and existing vehicle' example works. Just execute 'Get an estimate for and existing vehicle' test from the 'src\reports\requests.http' path.  
The response should be 'HTTP/1.1 200 OK' and if we see the servers console output, we will see the following output:  
```
{
  make: 'Toyota',
  model: 'Camry',
  year: 2012,
  lng: 0,
  lat: 0,
  mileage: 100000
}
```