import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  passwordConfirm: string;

  @IsOptional()
  @IsString()
  @Length(3, 15)
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(16)
  age?: number;

  @IsOptional()
  @IsString()
  @Length(10, 100)
  bio?: string;
}
