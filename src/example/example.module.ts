import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService_BestPractice } from './example.service';
import { ExampleRepository } from './example.repository';

@Module({
  controllers: [ExampleController],
  // Add the 'ExampleService_BestPractice' to the providers array.
  providers: [ExampleService_BestPractice, ExampleRepository],
})
export class ExampleModule {}
