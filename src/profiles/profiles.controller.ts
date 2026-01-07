import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

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
  createOne(@Body() CreateProfileDto: CreateProfileDto) {
    return this.ProfilesService.createOne(CreateProfileDto);
  }

  // PUT /profiles/:id
  @Put(':id')
  updateOne(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() UpdateProfileDto: UpdateProfileDto,
  ) {
    return this.ProfilesService.updateOne(id, UpdateProfileDto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteOne(@Param('id', ParseUUIDPipe) id: UUID) {
    this.ProfilesService.deleteOne(id);
  }
}
