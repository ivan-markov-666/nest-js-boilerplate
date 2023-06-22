import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  // Add a new column to the Report entity.
  @Column()
  // The column is called 'make' and it is a 'string'.
  make: string;

  // Add a new column to the Report entity.
  @Column()
  // The column is called 'model' and it is a 'string'.
  model: string;

  // Add a new column to the Report entity.
  @Column()
  // The column is called 'year' and it is a 'number'.
  year: number;

  // Add a new column to the Report entity.
  @Column()
  // The column is called 'lng' and it is a 'number'.
  lng: number;

  // Add a new column to the Report entity.
  @Column()
  // The column is called 'lat' and it is a 'number'.
  lat: number;

  // Add a new column to the Report entity.
  @Column()
  // The column is called 'mileage' and it is a 'number'.
  mileage: number;
}
