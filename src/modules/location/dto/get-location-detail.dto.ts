import { Exclude, Expose, Type } from 'class-transformer';
import { AreaUnit } from 'src/domain/types';

@Exclude()
export class GetLocationDetailDto {
  @Expose()
  id: number;

  @Expose()
  locationName: string;

  @Expose()
  locationNumber: string;

  @Expose()
  building: string;

  @Expose()
  area: number;

  @Expose()
  unit: AreaUnit;

  @Expose()
  @Type(() => GetLocationDetailDto)
  children: GetLocationDetailDto[];

  @Expose()
  @Type(() => GetLocationDetailDto)
  parent: GetLocationDetailDto;
}
