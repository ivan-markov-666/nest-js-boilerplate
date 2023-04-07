import { IsString } from 'class-validator';

export class CreteExampleDto {
  @IsString()
  text: string;
}
