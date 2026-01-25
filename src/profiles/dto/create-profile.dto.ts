import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
  Min,
} from 'class-validator';
export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 15)
  name: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  @Min(18)
  age: number;

  @IsString()
  @Length(10, 100)
  bio: string;
}
