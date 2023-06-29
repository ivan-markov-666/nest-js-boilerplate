import {
  Controller,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
  // Added the 'Get' decorator from '@nestjs/common'.
  Get,
  // Added the 'Query' decorator from '@nestjs/common'.
  Query,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../guards/auth.guard';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { Users } from 'src/users/users.entity';
import { ReportDto } from './dto/report.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ApproveReportDto } from './dto/approve-report.dto';
import { AdminGuard } from 'src/guards/admin.guard';
// Import the 'GetEstimateDto' class.
import { GetEstimateDto } from './dto/get-estimate.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  // Add the 'Get' decorator to the 'getEstimate' method.
  @Get()
  // !!!!
  getEstimate(@Query() query: GetEstimateDto) {
    console.log(query);
  }

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: Users) {
    console.log('createReport method activated');
    console.log('Received data:', body);
    return this.reportsService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approvedReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    console.log('approvedReport method activated');
    console.log('Received data:', body);
    return this.reportsService.changeApproval(id, body.approved);
  }
}
