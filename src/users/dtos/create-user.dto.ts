import { IsEmail, IsString } from 'class-validator';

export class CreteUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
