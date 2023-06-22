import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  // Added 'OneToMany' function to create a relationship between the 'Users' and 'Tasks' entities (one user can have many tasks).
  OneToMany,
} from 'typeorm';
// Added 'Report' class from the 'report.entity.ts' file.
import { Report } from '../reports/report.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  // Added 'OneToMany' decorator to create a relationship between the 'Users' and 'Tasks' entities (one user can have many tasks).
  @OneToMany(() => Report, (report) => report.user)
  // Added 'reports' property to the 'Users' entity.
  reports: Report[];

  @AfterInsert()
  loginInsert() {
    console.log("User with id '" + this.id + "' has been inserted");
  }

  @AfterUpdate()
  logUpdate() {
    console.log("User with id '" + this.id + "' has been updated");
  }

  @AfterRemove()
  logRemove() {
    console.log("User with id '" + this.id + "' has been removed");
  }
}
