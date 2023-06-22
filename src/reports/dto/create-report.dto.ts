// Import the 'IsString', 'IsNumber', 'Min', 'Max', 'IsLongitude', and 'IsLatitude' decorators from the 'class-validator' module.
import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
} from 'class-validator';

// Create a new class called CreateReportDto for the 'reports' module. This class will be used to validate the data that is sent to the 'reports' controller.
export class CreateReportDto {
  // Add 'IsString' decorator to the 'make' property. This decorator will ensure that the 'make' property is a string.
  @IsString()
  // Add a new property to the CreateReportDto class. The property is called 'make' and it is a 'string'.
  make: string;

  // Add 'IsString' decorator to the 'model' property. This decorator will ensure that the 'model' property is a string.
  @IsString()
  // Add a new property to the CreateReportDto class. The property is called 'model' and it is a 'string'.
  model: string;

  // Add 'IsNumber' decorator to the 'year' property. This decorator will ensure that the 'year' property is a number.
  @IsNumber()
  // Add 'Min' decorator to the 'year' property. This decorator will ensure that the 'year' property is greater than or equal to 1930.
  @Min(1930)
  // Add 'Max' decorator to the 'year' property. This decorator will ensure that the 'year' property is less than or equal to 2050.
  @Max(2050)
  // Add a new property to the CreateReportDto class. The property is called 'year' and it is a 'number'.
  year: number;

  // Add 'IsLongitude' decorator to the 'lng' property. This decorator will ensure that the 'lng' property is a longitude.
  @IsLongitude()
  // Add a new property to the CreateReportDto class. The property is called 'lng' and it is a 'number'.
  lng: number;

  // Add 'IsLatitude' decorator to the 'lat' property. This decorator will ensure that the 'lat' property is a latitude.
  @IsLatitude()
  // Add a new property to the CreateReportDto class. The property is called 'lat' and it is a 'number'.
  lat: number;

  // Add 'IsNumber' decorator to the 'mileage' property. This decorator will ensure that the 'mileage' property is a number.
  @IsNumber()
  // Add 'Min' decorator to the 'mileage' property. This decorator will ensure that the 'mileage' property is greater than or equal to 0.
  @Min(0)
  // Add 'Max' decorator to the 'mileage' property. This decorator will ensure that the 'mileage' property is less than or equal to 1000000.
  @Max(1000000)
  // Add a new property to the CreateReportDto class. The property is called 'mileage' and it is a 'number'.
  mileage: number;

  // Add 'IsNumber' decorator to the 'price' property. This decorator will ensure that the 'price' property is a number.
  @IsNumber()
  // Add 'Min' decorator to the 'price' property. This decorator will ensure that the 'price' property is greater than or equal to 0.
  @Min(0)
  // Add 'Max' decorator to the 'price' property. This decorator will ensure that the 'price' property is less than or equal to 1000000.
  @Max(1000000)
  // Add a new property to the CreateReportDto class. The property is called 'price' and it is a 'number'.
  price: number;
}
