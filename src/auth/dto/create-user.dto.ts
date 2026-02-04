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
import { Match } from 'src/common/decorators/match.decorator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Match('password')
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
