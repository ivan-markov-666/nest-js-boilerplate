// Added 'IsBoolean' decorator from 'class-validator'.
import { IsBoolean } from 'class-validator';

// Added 'ApproveReportDto' class. This will be used to validate the 'approved' property.
export class ApproveReportDto {
  // Added 'IsBoolean' decorator. This is used to validate the 'approved' property.
  @IsBoolean()
  // Added 'approved' property. This will be used to determine whether a report has been approved or not.
  approved: boolean;
}
