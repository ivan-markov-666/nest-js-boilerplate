import { Module } from '@nestjs/common';
// Imported TypeOrmModule to use TypeORM in NestJS application.
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
// Imported Report entity to use it in the module.
import { Report } from './report.entity';

@Module({
  // Added imports array to import TypeOrmModule.
  imports: [
    // Imported TypeOrmModule with forFeature() method.
    TypeOrmModule.forFeature([
      // Added Report entity to the entities array.
      Report,
    ]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
