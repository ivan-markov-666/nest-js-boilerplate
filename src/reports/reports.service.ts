import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { Users } from '../users/users.entity';
// Import 'GetEstimateDto' class from './dto/get-estimate.dto.ts'.
import { GetEstimateDto } from './dto/get-estimate.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  // Added 'createEstimate' method. This method will be used to calculate the average price of a car.
  createEstimate({ make, model, lng, lat, year, mileage }: GetEstimateDto) {
    // Return the average price of a car.
    return (
      this.repo
        // Use 'createQueryBuilder' method to create a query.
        .createQueryBuilder()
        // Select the average price of a car.
        .select('AVG(price)', 'price')
        // Filter the query by the make, model, lng, lat, year, and mileage.
        .where('make = :make', { make })
        // Filter the query by the model.
        .andWhere('model = :model', { model })
        // Filter the query by the lng.
        .andWhere('lng- :lng BETWEEN -5 AND 5', { lng })
        // Filter the query by the lat.
        .andWhere('lat- :lat BETWEEN -5 AND 5', { lat })
        // Filter the query by the year.
        .andWhere('year- :year BETWEEN -5 AND 5', { year })
        // Approved reports only.
        .andWhere('approved IS TRUE')
        // Filter the query by the mileage.
        .orderBy('ABS(mileage - :mileage)', 'DESC')
        // Set the parameters.
        .setParameters({ mileage })
        // Limit the query to 3 results.
        .limit(3)
        // Execute the query.
        .getRawOne()
    );
  }

  create(reportDtop: CreateReportDto, user: Users) {
    const report = this.repo.create(reportDtop);
    report.user = user;
    return this.repo.save(report);
  }

  async changeApproval(id: string, approved: boolean) {
    const report = await this.repo.findOne({ where: { id: parseInt(id) } });
    if (!report) {
      throw new NotFoundException('report not found');
    }

    report.approved = approved;
    return this.repo.save(report);
  }
}
