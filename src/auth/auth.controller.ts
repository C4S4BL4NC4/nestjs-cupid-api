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

  // PATCH /ME
  // // PATCH /auth/:id
  // @Patch(':id')
  // @HttpCode(HttpStatus.ACCEPTED)
  // public async updateOne(
  //   @Param('id', ParseUUIDPipe) id: string,
  //   @Body(new ValidationPipe()) UpdateProfileDto: UpdateProfileDto,
  // ) {
  //   return await this.ProfilesService.updateOne(id, UpdateProfileDto);
  // }

  // DELETE /ME
  // @Delete(':id')
  // @UseGuards(ProfilesGuard)
  // @HttpCode(HttpStatus.NO_CONTENT)
  // public async deleteOne(@Param('id', ParseUUIDPipe) id: UUID) {
  //   await this.ProfilesService.deleteOne(id);
  // }
}
