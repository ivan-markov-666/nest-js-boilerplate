import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
} from 'typeorm';
import { Report } from '../reports/report.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
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
