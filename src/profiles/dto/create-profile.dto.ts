import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
  Min,
  MinLength,
} from 'class-validator';
export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  passwordConfirm: string;

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
