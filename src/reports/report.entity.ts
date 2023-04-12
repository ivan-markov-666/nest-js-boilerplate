// This file is used to define the structure of the report table in the database

// imported the Entity, Column, and PrimaryGeneratedColumn decorators from the typeorm package.
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// The @Entity() decorator is used to define the model of the report table.
@Entity()
// The class is exported to be used in other files. The class is used to define the structure of the report table in the database.
export class Report {
  // The @PrimaryGeneratedColumn() decorator is used to define the id column as the primary key of the report table.
  @PrimaryGeneratedColumn()
  // The id variable is used to store the value of the id column in the report table.
  id: number;

  // The @Column() decorator is used to define the price column in the report table.
  @Column()
  // The price variable is used to store the value of the price column in the report table.
  price: number;
}
