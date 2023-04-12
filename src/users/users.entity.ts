// This file is used to define the structure of the users table in the database and to define the model of the users table. The model is used to interact with the database.

// Import the Entity, Column, and PrimaryGeneratedColumn decorators from the typeorm package.
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// The @Entity() decorator is used to define the model of the users table.
@Entity()
// The class is exported to be used in other files. The class is used to define the structure of the users table in the database.
export class Users {
  // The @PrimaryGeneratedColumn() decorator is used to define the id column as the primary key of the users table.
  @PrimaryGeneratedColumn()
  // The id variable is used to store the value of the id column in the users table.
  id: number;

  // The @Column() decorator is used to define the email column in the users table.
  @Column()
  // The email variable is used to store the value of the email column in the users table.
  email: string;

  // The @Column() decorator is used to define the password column in the users table.
  @Column()
  // The password variable is used to store the value of the password column in the users table.
  password: string;
}
