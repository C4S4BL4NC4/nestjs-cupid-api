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

  async signUp(dto: CreateUserDto) {
    try {
    } catch (_) {
      throw new ConflictException('Email is already in use');
    }
    const entity = this.usersRepo.create(dto);
    return this.usersRepo.save(entity);
  }

  async login(dto: LoginUserDto) {
    try {
      await console.log(dto);
    } catch (_) {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  // async updateOne(id: string, dto: UpdateProfileDto) {
  //   const found = await this.findOne(id);
  //   if (!found) {
  //     throw new NotFoundException('Cannot update a profile with matching id.');
  //   }
  //   this.profilesRepo.merge(found, dto);
  //   return this.profilesRepo.save(found);
  // }

  // async deleteOne(id: string): Promise<void> {
  //   const result = await this.profilesRepo.delete(id);
  //   if (result.affected === 0) {
  //     throw new NotFoundException('Cannot delete profile with matching id.');
  //   }
  // }
}
