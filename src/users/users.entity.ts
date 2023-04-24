// The 'Exclude()' decorator was removed from the 'User' class.
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

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
