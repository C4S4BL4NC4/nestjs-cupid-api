import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  public async signUp(
    @Body(new ValidationPipe()) CreateUserDto: CreateUserDto,
  ) {
    return await this.AuthService.signUp(CreateUserDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  public async signIn(@Body(new ValidationPipe()) LoginUserDto: LoginUserDto) {
    return await this.AuthService.login(LoginUserDto);
  }
}
