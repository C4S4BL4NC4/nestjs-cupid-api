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
