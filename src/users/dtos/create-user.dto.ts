// This file is used to validate the data that is sent to the server

// Import the IsEmail and IsString decorators from the class-validator package.
import { IsEmail, IsString } from 'class-validator';

// The class is exported to be used in other files. The class is used to validate the data that is sent to the server.
export class CreteUserDto {
  // The @IsEmail() decorator is used to validate the email property.
  @IsEmail()
  // The email variable is used to store the value of the email property.
  email: string;

  // The @IsString() decorator is used to validate the password property.
  @IsString()
  // The password variable is used to store the value of the password property.
  password: string;
}
