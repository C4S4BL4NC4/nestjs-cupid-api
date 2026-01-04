import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(), // Cosmically not unique
      name: 'Walter White',
      description:
        'A friendly chemist, his wife cheated on him with some wallstreet dude. Open for illegal business ideas!',
    },
    {
      id: randomUUID(),
      name: 'Dexter Morgan',
      description:
        'Meet Dex and his dark passenger! A widower, whome wife has passed away recently while he was away on a fishing trip.',
    },
    {
      id: randomUUID(),
      name: 'Kim Wexler',
      description:
        'The best lawyer in HHM Law Firm! A recently divorced woman, whome her exhusband was involved with the drug cartels and some guy called Heisenburg',
    },
    {
      id: randomUUID(),
      name: 'Debra Morgan',
      description:
        "Grade-A cop from Miami Metro PD. Just ended a relationship 0.1ns ago. Now, she's single and ready to mingle!",
    },
  ];

  findAll() {
    return this.profiles;
  }

  createOne(CreateProfileDto: CreateProfileDto) {
    const createdProfile = {
      id: randomUUID(),
      ...CreateProfileDto,
    };
    this.profiles.push(createdProfile);
    return createdProfile;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  deleteOne(id: string): void {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (matchingProfileIndex > -1) {
      this.profiles.splice(matchingProfileIndex, 1);
    }
  }

  updateOne(id: string, UpdateProfileDto: UpdateProfileDto) {
    const match = this.profiles.find((exProfile) => exProfile.id === id);

    if (!match) return {};
    match.name = UpdateProfileDto.name;
    match.description = UpdateProfileDto.description;
    return match;
  }
}
