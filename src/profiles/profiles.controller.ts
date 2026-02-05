import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
  ValidationPipe,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

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
  public async findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return await this.ProfilesService.findOne(id);
  }

  // POST /profiles
  // @Post()
  // public async createOne(
  //   @Body(new ValidationPipe()) CreateProfileDto: CreateProfileDto,
  // ) {
  //   return await this.ProfilesService.createOne(CreateProfileDto);
  // }

  // PATCH /profiles/:id
  // @Patch(':id')
  // @HttpCode(HttpStatus.ACCEPTED)
  // public async updateOne(
  //   @Param('id', ParseUUIDPipe) id: string,
  //   @Body(new ValidationPipe()) UpdateProfileDto: UpdateProfileDto,
  // ) {
  //   return await this.ProfilesService.updateOne(id, UpdateProfileDto);
  // }

  //   // DELETE /profiles/:id
  //   @Delete(':id')
  //   @UseGuards(ProfilesGuard)
  //   @HttpCode(HttpStatus.NO_CONTENT)
  //   public async deleteOne(@Param('id', ParseUUIDPipe) id: UUID) {
  //     await this.ProfilesService.deleteOne(id);
  //   }
}
