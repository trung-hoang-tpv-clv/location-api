import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from '../../domain/entities';
import {
  CreateLocationDto,
  CreateLocationResDto,
  GetLocationDetailDto,
} from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('locations')
@ApiTags('Locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateLocationResDto,
    description: 'Api to create location',
  })
  async createLocation(
    @Body() location: CreateLocationDto,
  ): Promise<CreateLocationResDto> {
    return this.locationService.createLocation(location);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetLocationDetailDto,
    description: 'Api to get location detail',
  })
  async getLocationDetail(
    @Param('id') id: number,
  ): Promise<GetLocationDetailDto> {
    return this.locationService.getLocationDetailById(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    type: GetLocationDetailDto,
    description: 'Api to update location',
  })
  async updateLocation(
    @Param('id') id: number,
    @Body() location: Location,
  ): Promise<void> {
    return this.locationService.updateLocation(id, location);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.locationService.deleteLocation(id);
  }
}
