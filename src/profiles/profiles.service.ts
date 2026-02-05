import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/user.entity';

// Most of the time errors get thrown from services and catched by controller.
@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(User)
    private readonly profilesRepo: Repository<User>,
  ) {}

  async findAll() {
    return this.profilesRepo.find();
  }

  async findOne(id: string) {
    const found = await this.profilesRepo.findOneBy({ id });
    if (!found) {
      throw new NotFoundException('Cannot find profile with matching id.');
    }
    return found;
  }
}
