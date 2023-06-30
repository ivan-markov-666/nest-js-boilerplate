# For what is that file:  
That file shows what was done at that branch. Remember, the branches are named with a number prefix. The number prefix indicates the lecture's progress. Starting from the first branch, you will be able to learn how to create a new NestJS project from scratch.  

## What was done in that lecture:  
Added approved report for getting an estimate for an existing vehicle.

### Added to the project:  
1. Added new 'createEstimate' method to the 'src\reports\reports.service.ts' file. The method will be used to create a new report for getting an estimate for an existing vehicle. For more details see the file.  
2. Add the 'createEstimate' method inside the 'getEstimate' endpoint located in the 'src\reports\reports.controller.ts' file. For more details see the file.  
4. Start the server:  
> npm run start:dev

5. Now we can test if the report works. Just execute 'Create a report and assing it to a user.', 'Approve the existing report', 'Get an estimate for and existing vehicle' and 'Test not approved report'.  
The response from 'Get an estimate for and existing vehicle' should be the price of the car:  
```
{
  "price": 50000
}
```

The reponse from 'Test not approved report' should be:  
```
{
  "price": null
}
```