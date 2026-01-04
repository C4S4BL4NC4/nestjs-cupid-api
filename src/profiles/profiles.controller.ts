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

@Controller('profiles')
export class ProfilesController {
  // GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return [{ id }];
  }

  // POST /profiles
  @Post()
  createOne(@Body() CreateProfileDto: CreateProfileDto) {
    return {
      name: CreateProfileDto.name,
      description: CreateProfileDto.description,
    };
  }

  // PUT /profiles/:id
  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() UpdateProfileDto: UpdateProfileDto,
  ) {
    return {
      id,
      ...UpdateProfileDto,
    };
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteOne(@Param('id') id: string) {}
}
