import {
  Controller,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../guards/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { Users } from '../users/users.entity';
import { ReportDto } from './dto/report.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ApproveReportDto } from './dto/approve-report.dto';
// Import the 'AdminGuard' guard. We will use this guard to protect the '/reports/:id' route.
import { AdminGuard } from '../guards/admin.guard';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: Users) {
    console.log('createReport method activated');
    console.log('Received data:', body);
    return this.reportsService.create(body, user);
  }

  @Patch('/:id')
  // Use the 'AdminGuard' guard to protect the '/reports/:id' route. This route will be used to approve a report. Only an admin should be able to approve a report.
  @UseGuards(AdminGuard)
  approvedReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    console.log('approvedReport method activated');
    console.log('Received data:', body);
    return this.reportsService.changeApproval(id, body.approved);
  }
}
