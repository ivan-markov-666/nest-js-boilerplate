import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../users/guards/auth.guard';
// Added 'CurrentUser' decorator to get the current user.
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
// Added 'Users' class from the 'users.entity.ts' file.
import { Users } from 'src/users/users.entity';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  // Added '@CurrentUser' decorator to get the current user.
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: Users) {
    // Pass 'user' to the 'create' function to create a report for the current user.
    return this.reportsService.create(body, user);
  }
}
