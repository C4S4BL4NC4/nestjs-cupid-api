import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async signUp(dto: CreateUserDto) {
    const entity = this.usersRepo.create(dto);
    return this.usersRepo.save(entity);
  }

  async login(dto: LoginUserDto) {
    return console.log('someone logged in');
  }
}
