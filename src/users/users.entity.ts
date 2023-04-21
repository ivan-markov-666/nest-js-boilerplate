import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';
// Import 'Exclude' from 'class-transformer' to hide password from response.
// Nest recomended solution for hiding sensitive data is using the `@Exclude()` decorator.
import { Exclude } from 'class-transformer';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  // Add 'Exclude' decorator to hide password from response.
  @Exclude()
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
