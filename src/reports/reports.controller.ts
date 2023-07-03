import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../users/guards/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { Users } from '../users/users.entity';
// Import the 'ReportDto' class from 'src\reports\dto\report.dto.ts'
import { ReportDto } from './dto/report.dto';
// Import the 'Serialize' decorator from 'src\interceptors\serialize.interceptor.ts'
import { Serialize } from '../interceptors/serialize.interceptor';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  // Add the 'Serialize' decorator to the 'createReport' method and pass in the 'ReportDto' class as an argument.
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: Users) {
    return this.reportsService.create(body, user);
  }
}
