import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { Location } from '../../domain/entities';
import {
  CreateLocationDto,
  CreateLocationResDto,
  GetLocationDetailDto,
  UpdateLocationDto,
} from './dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async createLocation(
    input: CreateLocationDto,
  ): Promise<CreateLocationResDto> {
    if (input.parentLocationId) {
      const parent = await this.locationRepository.findOneBy({ locationId: input.parentLocationId });
      if (!parent) {
        throw new NotFoundException('Parent location not found');
      }
    }

    const newLocation = new Location(input);
    await this.locationRepository.insert(newLocation);
    return plainToInstance(CreateLocationResDto, newLocation);
  }

  async getLocationDetailById(
    locationId: number,
  ): Promise<GetLocationDetailDto> {
    const location = this.locationRepository.findOne({
      where: {
        locationId,
        deletedAt: null,
      },
      relations: ['children', 'parent']
    });

    if (!location) {
      throw new NotFoundException('Location not found');
    }
    return plainToInstance(GetLocationDetailDto, location);
  }

  async updateLocation(
    locationId: number,
    input: UpdateLocationDto,
  ): Promise<void> {
    const location = await this.locationRepository.findOneBy({
      locationId,
      deletedAt: null,
    });

    if (input.parentLocationId && input.parentLocationId !== location.parentLocationId) {
      const newParent = await this.locationRepository.findOneBy({ locationId: input.parentLocationId });
      if (!newParent) {
        throw new NotFoundException('New parent location not found');
      }
    }
    if (!location) {
      throw new NotFoundException('Location not found');
    }
    await this.locationRepository.update(locationId, input);
  }

  async deleteLocation(locationId: number): Promise<void> {
    const location = await this.locationRepository.findOne({
      where: { locationId, deletedAt: null },
      relations: ['children']
    });

    if (!location) {
      throw new NotFoundException('Location not found');
    }

    await this.recursiveDelete(location);
  }

  private async recursiveDelete(location: Location): Promise<void> {
    if (location.children && location.children.length > 0) {
      for (const child of location.children) {
        await this.recursiveDelete(child);
      }
    }
    await this.locationRepository.softDelete(location.locationId);
  }
}
