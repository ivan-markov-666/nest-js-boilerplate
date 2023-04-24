// Import 'Expose' from 'class-transformer' to expose the properties of the class to the client side.
import { Expose } from 'class-transformer';

// Create a class called 'UserDto' to expose the properties of the class to the client side.
export class UserDto {
  // Use 'Expose' to expose the properties of the class to the client side.
  @Expose()
  // Create a property called 'id' of type 'number'.
  id: number;

  // Use 'Expose' to expose the properties of the class to the client side.
  @Expose()
  // Create a property called 'email' of type 'string'.
  password: string;
}
