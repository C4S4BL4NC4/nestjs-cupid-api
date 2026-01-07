import { IsString, Length } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @Length(3, 20)
  name: string;
  @IsString()
  @Length(10, 100)
  description: string;
}
