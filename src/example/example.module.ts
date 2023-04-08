import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService_BetterPractice } from './example.service';
import { ExampleRepository } from './example.repository';

@Module({
  controllers: [ExampleController],
  providers: [ExampleService_BetterPractice, ExampleRepository],
})
export class ExampleModule {}
