// Import 'AfterInsert', 'AfterUpdate' and 'AfterRemove' decorator from TypeORM.
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

  // Add a login methods.
  // Add the 'AfterInsert' decorator.
  @AfterInsert()
  // Add the 'loginInsert' method.
  loginInsert() {
    // Log the user id.
    console.log("User with id '" + this.id + "' has been inserted");
  }

  // Add the 'AfterUpdate' decorator.
  @AfterUpdate()
  // Add the 'logUpdate' method.
  logUpdate() {
    // Log the user id.
    console.log("User with id '" + this.id + "' has been updated");
  }

  // Add the 'AfterRemove' decorator.
  @AfterRemove()
  // Add the 'logRemove' method.
  logRemove() {
    // Log the user id.
    console.log("User with id '" + this.id + "' has been removed");
  }
}
