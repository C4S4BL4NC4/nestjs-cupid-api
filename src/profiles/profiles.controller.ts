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
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

// Most of the time errors get thrown from services and catched by controller.

@Controller('profiles')
export class ProfilesController {
  constructor(private ProfilesService: ProfilesService) {}

  // GET /profiles
  @Get()
  findAll() {
    return this.ProfilesService.findAll();
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.ProfilesService.findOne(id);
  }

  // POST /profiles
  @Post()
  createOne(@Body(new ValidationPipe()) CreateProfileDto: CreateProfileDto) {
    return this.ProfilesService.createOne(CreateProfileDto);
  }

  // PATCH /profiles/:id
  @Patch(':id')
  updateOne(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ValidationPipe()) UpdateProfileDto: UpdateProfileDto,
  ) {
    return this.ProfilesService.updateOne(id, UpdateProfileDto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @UseGuards(ProfilesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteOne(@Param('id', ParseUUIDPipe) id: UUID) {
    await this.ProfilesService.deleteOne(id);
  }
}
