// Import 'IsString', 'IsNumber', 'Min', 'Max', 'IsLongitude', 'IsLatitude' from 'class-validator' and use them to validate the 'make', 'model', 'year', 'lng', 'lat', 'mileage' properties of the 'GetEstimateDto' class.
import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
} from 'class-validator';
// Import 'Transform' from 'class-transformer'.
import { Transform } from 'class-transformer';

// Create a class named 'GetEstimateDto'.
export class GetEstimateDto {
  // Use the 'IsString' decorator to validate the 'make' property.
  @IsString()
  // Add the 'make' property.
  make: string;

  // Use the 'IsString' decorator to validate the 'model' property.
  @IsString()
  // Add the 'model' property.
  model: string;

  // Use the 'Transform' decorator to transform the 'year' property from a string to a number.
  @Transform(({ value }) => parseInt(value))
  // Use the 'IsNumber', 'Min', 'Max' decorators to validate the 'year' property.
  @IsNumber()
  // Use the 'Min' decorator to validate the 'year' property. The minimum value is '1930'.
  @Min(1930)
  // Use the 'Max' decorator to validate the 'year' property. The maximum value is '2050'.
  @Max(2050)
  // Add the 'year' property.
  year: number;

  // Use the 'Transform' decorator to transform the 'lng' property from a string to a number.
  @Transform(({ value }) => parseInt(value))
  // Use the 'IsLongitude' decorator to validate the 'lng' property.
  @IsLongitude()
  // Add the 'lng' property.
  lng: number;

  // Use the 'Transform' decorator to transform the 'lat' property from a string to a number.
  @Transform(({ value }) => parseInt(value))
  // Use the 'IsLatitude' decorator to validate the 'lat' property.
  @IsLatitude()
  // Add the 'lat' property.
  lat: number;

  // Use the 'Transform' decorator to transform the 'mileage' property from a string to a number.
  @Transform(({ value }) => parseInt(value))
  // Use the 'IsNumber', 'Min', 'Max' decorators to validate the 'mileage' property.
  @IsNumber()
  // Use the 'Min' decorator to validate the 'mileage' property. The minimum value is '0'.
  @Min(0)
  // Use the 'Max' decorator to validate the 'mileage' property. The maximum value is '1000000'.
  @Max(1000000)
  // Add the 'mileage' property.
  mileage: number;
}
