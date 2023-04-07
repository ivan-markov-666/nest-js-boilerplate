// Import the IsString decorator from the class-validator package.
import { IsString } from 'class-validator';

// Create a class that describes the different properties that the request body will have.
export class CreteExampleDto {
  // Add validation rules to the properties.
  // The text property will be a string.
  @IsString()
  text: string;
}
