import { Injectable } from '@nestjs/common';
// Added 'InjectRepository' method from '@nestjs/typeorm' to inject the repository into the service class.
import { InjectRepository } from '@nestjs/typeorm';
// Added 'Repository' class from 'typeorm' to use the repository.
import { Repository } from 'typeorm';
// Added 'Report' class from './report.entity' to use the Report entity.
import { Report } from './report.entity';
// Added 'CreateReportDto' class from './dto/create-report.dto' to use the CreateReportDto class.
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportsService {
  // Added 'constructor' method to inject the repository into the service class.
  constructor(
    // Added '@InjectRepository' method to inject the repository into the service class. Also, added 'Report' class in the method to use the Report entity.
    @InjectRepository(Report) private repo: Repository<Report>,
  ) {}

  // Added 'create' method to create a new report.
  create(reportDtop: CreateReportDto) {
    // Assign the 'reportDtop' to the 'report' variable.
    const report = this.repo.create(reportDtop);
    // Return the 'report' variable.
    return this.repo.save(report);
  }
}
