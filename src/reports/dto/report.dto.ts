// Import 'Expose' and 'Transform' from 'class-transformer'
import { Expose, Transform } from 'class-transformer';

// Create a class called 'ReportDto'
export class ReportDto {
  // 'Expose' the 'id' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'id' property to the 'ReportDto' class.
  id: number;
  // 'Expose' the 'price' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'price' property to the 'ReportDto' class.
  price: number;
  // 'Expose' the 'year' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'year' property to the 'ReportDto' class.
  year: number;
  // 'Expose' the 'lng' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'lng' property to the 'ReportDto' class.
  lng: number;
  // 'Expose' the 'lat' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'lat' property to the 'ReportDto' class.
  lat: number;
  // 'Expose' the 'mileage' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'mileage' property to the 'ReportDto' class.
  mileage: number;
  // 'Expose' the 'user' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'user' property to the 'ReportDto' class.
  make: string;
  // 'Expose' the 'model' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'model' property to the 'ReportDto' class.
  model: string;

  // 'Transform' the 'user' property of the 'ReportDto' class to the 'id' property of the 'Users' class.
  @Transform(({ obj }) => obj.user.id)
  // 'Expose' the 'user' property of the 'ReportDto' class to the outside world (i.e. to the client).
  @Expose()
  // Add 'user' property to the 'ReportDto' class.
  userId: number;
}
