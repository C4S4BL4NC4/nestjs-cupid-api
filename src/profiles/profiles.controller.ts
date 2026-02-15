import { Controller, Get, Param, HttpCode } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

// Most of the time errors get thrown from services and catched by controller.

@Controller('profiles')
export class ProfilesController {
  constructor(private ProfilesService: ProfilesService) {}

  // GET /profiles
  @Get()
  @HttpCode(200)
  public async findAll() {
    return await this.ProfilesService.findAll();
  }

  // GET /profiles/:id
  @Get(':id')
  @HttpCode(200)
  public async findOne(@Param('username') username: string) {
    return await this.ProfilesService.findOne(username);
  }
}
