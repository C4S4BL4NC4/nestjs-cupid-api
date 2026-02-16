import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  /*
signUp
1. Checks for existing user.
2. Throws error if yes.
3. Creating a user according to dto then save it.
*/
  async signUp(dto: CreateUserDto) {
    const existingUser = await this.usersRepo.findOne({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException('Email is already in use');
    }
    const entity = this.usersRepo.create(dto);
    return this.usersRepo.save(entity);
  }

  /*
  login
  1. Check for user on db and its existance
  2. Check if password is valid and if it matches
  */

  async login(dto: LoginUserDto) {
    const existingUser = await this.usersRepo.findOne({
      where: { email: dto.email },
      select: ['id', 'email', 'password', 'username'],
    });
    if (!existingUser)
      throw new UnauthorizedException('Invalid email or password');

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      existingUser.password,
    );
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid email or password');

    console.log(existingUser);
    const { password, ...result } = existingUser;

    return result;
  }
}
