import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Min,
  MinLength,
} from 'class-validator';

import { Match } from 'src/common/decorators/match.decorator';

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
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  newPasswordConfirm: string;

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
