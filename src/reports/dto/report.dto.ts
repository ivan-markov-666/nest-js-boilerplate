import { Expose, Transform } from 'class-transformer';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  mileage: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  // Added '@Expose()' decorator. This is used to expose the 'approved' property.
  @Expose()
  // Added 'approved' property. This will be used to determine whether a report has been approved or not.
  approved: boolean;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
