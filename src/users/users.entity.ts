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

  // Adding '@Column' decorator to the 'admin' property will make it a column in the database table 'users' and will allow us to save the value of the 'admin' property in the database. The 'default' property is used to set the default value of the 'admin' property to 'false' if no value is provided when creating a new user. This means that if we don't provide a value for the 'admin' property when creating a new user, the value of the 'admin' property will be 'false' by default. This is useful because we don't want to make every user an admin by default. We want to make the user an admin only if we explicitly set the value of the 'admin' property to 'true' when creating a new user.
  @Column({ default: true })
  admin: boolean;

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
