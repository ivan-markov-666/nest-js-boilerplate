import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // Added 'ManyToOne' function to create a relationship between the 'Reports' and 'Users' entities (many reports can have one user).
  ManyToOne,
} from 'typeorm';
// Added 'Users' class from the 'users.entity.ts' file.
import { Users } from '../users/users.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

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

  // Added 'ManyToOne' decorator to create a relationship between the 'Reports' and 'Users' entities (many reports can have one user).
  @ManyToOne(() => Users, (user) => user.reports)
  // Added 'user' property to the 'Reports' entity.
  user: Users;
}
