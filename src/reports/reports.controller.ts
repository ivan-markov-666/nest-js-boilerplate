// Added the 'Post', 'Body', 'UseGuards' decorators from the '@nestjs/common' package to the 'reports' controller.
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
// Added tje 'CreateReportDto' class from the './dto/create-report.dto' file to the 'reports' controller.
import { CreateReportDto } from './dto/create-report.dto';
// Added the 'ReportsService' class from the './reports.service' file to the 'reports' controller.
import { ReportsService } from './reports.service';
// Added the 'AuthGuard' class from the '../users/guards/auth.guard' file to the 'reports' controller.
import { AuthGuard } from '../users/guards/auth.guard';

@Controller('reports')
export class ReportsController {
  // Injected the 'ReportsService' class into the 'ReportsController' class.
  constructor(private reportsService: ReportsService) {}

  // Added the 'Post' decorator to the 'createReport' method. This decorator will ensure that the 'createReport' method is called when a POST request is made to the '/reports' endpoint.
  @Post()
  // Added the 'UseGuards' decorator to the 'createReport' method. This decorator will ensure that the 'createReport' method is called when a POST request is made to the '/reports' endpoint.
  @UseGuards(AuthGuard)
  // Added the 'Body' decorator to the 'createReport' method. This decorator will ensure that the 'createReport' method is called when a POST request is made to the '/reports' endpoint.
  createReport(@Body() body: CreateReportDto) {
    return this.reportsService.create(body);
  }
}
