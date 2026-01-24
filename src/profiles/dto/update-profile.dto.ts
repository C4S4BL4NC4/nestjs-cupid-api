import { IsInt, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateProfileDto {
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
