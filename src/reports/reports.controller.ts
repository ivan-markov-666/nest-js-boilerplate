import {
  Controller,
  Post,
  Body,
  UseGuards,
  // Added 'Patch' decorator. This is used to create a PATCH endpoint.
  Patch,
  // Added 'Param' decorator. This is used to get the 'id' parameter from the request.
  Param,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../users/guards/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { Users } from '../users/users.entity';
import { ReportDto } from './dto/report.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
// Added 'ApproveReportDto' class. This will be used to validate the 'approved' property.
import { ApproveReportDto } from './dto/approve-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: Users) {
    return this.reportsService.create(body, user);
  }

  // Added new PATCH endpoint. This will be used to approve a report.
  @Patch('/:id')
  // Added 'approveReport' method. This will be used to approve a report, by providing the 'id' of the report and the 'approved' property.
  approvedReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    // Returning the 'changeApproval' method from the 'reportsService'. This will be used to approve a report, by providing the 'id' of the report and the 'approved' property.
    return this.reportsService.changeApproval(id, body.approved);
  }
}
