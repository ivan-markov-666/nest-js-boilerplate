import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  // Added '@Column()' decorator. This is used by TypeORM to create a column in the database. Provided 'default: false' to set the default value of the column to false.
  @Column({ default: false })
  // Added 'approved' property. This will be used to determine whether a report has been approved or not.
  approved: boolean;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @ManyToOne(() => Users, (user) => user.reports)
  user: Users;
}
