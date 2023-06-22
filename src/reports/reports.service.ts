import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/create-report.dto';
// Added 'Users' class from the 'users.entity.ts' file.
import { Users } from '../users/users.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  // Added 'user' parameter to the 'create' function to create a report for the current user.
  create(reportDtop: CreateReportDto, user: Users) {
    const report = this.repo.create(reportDtop);
    // Added 'user' property to the 'report' object.
    report.user = user;
    return this.repo.save(report);
  }
}
