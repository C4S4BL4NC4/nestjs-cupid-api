import { IsInt, IsString, Length, Min } from 'class-validator';
export class CreateProfileDto {
  @IsString()
  @Length(3, 15)
  name: string;

  @IsInt()
  @Min(16)
  age: number;

  @IsString()
  @Length(10, 100)
  bio: string;
}
