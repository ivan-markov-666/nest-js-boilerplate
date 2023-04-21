// This DTO is used to update a user.

// Import the 'IsEmail', 'IsString' and 'IsOptional' decorators from the 'class-validator' package.
import { IsEmail, IsString, IsOptional } from 'class-validator';

// Export the 'UpdateUserDto' class.
// The 'UpdateUserDto' class is used to update a user and validate the data that is sent to the 'update' method in the 'UsersService' class.
export class UpdateUserDto {
  // Validate if the given value is actually an email address.
  @IsEmail()
  // The parameter is optional.
  @IsOptional()
  // The 'email' property is a string.
  email: string;

  // Validate if the given value is actually a string.
  @IsString()
  // The parameter is optional.
  @IsOptional()
  // The 'password' property is a string.
  password: string;
}
