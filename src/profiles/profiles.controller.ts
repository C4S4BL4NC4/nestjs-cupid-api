import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Put,
  Delete,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

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
  findOne(@Param('id') id: string) {
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
    @Param('id') id: string,
    @Body() UpdateProfileDto: UpdateProfileDto,
  ) {
    return this.ProfilesService.updateOne(id, UpdateProfileDto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteOne(@Param('id') id: string) {
    this.ProfilesService.deleteOne(id);
  }
}
