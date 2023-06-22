// Added 'NotFoundException' from '@nestjs/common'. This will be used to throw an error if a report is not found.
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { Users } from '../users/users.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(reportDtop: CreateReportDto, user: Users) {
    const report = this.repo.create(reportDtop);
    report.user = user;
    return this.repo.save(report);
  }

  // Added 'changeApproval' method. This will be used to approve a report, by providing the 'id' of the report and the 'approved' property.
  async changeApproval(id: string, approved: boolean) {
    // Added 'findOne' method. This will be used to find a report by its 'id'.
    const report = await this.repo.findOne({ where: { id: parseInt(id) } });
    // Added 'if' statement. This will be used to throw an error if a report is not found.
    if (!report) {
      // Throwing an error if a report is not found.
      throw new NotFoundException('report not found');
    }

    // Added 'approved' property. This will be used to determine whether a report has been approved or not.
    report.approved = approved;
    // Added 'save' method. This will be used to save the report.
    return this.repo.save(report);
  }
}
