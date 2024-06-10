import { Exclude, Expose } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { AreaUnit } from '../../../domain/types';
import { Nullable } from '../../../common/types';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  locationName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  locationNumber: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  building: string;

  @IsNumber()
  @IsNotEmpty()
  area: number;

  @IsEnum(AreaUnit)
  @IsNotEmpty()
  unit: AreaUnit;

  @IsNumber()
  @IsOptional()
  @Min(1)
  parentLocationId: Nullable<number>;
}

@Exclude()
export class CreateLocationResDto {
  @Expose()
  locationId: number;

  @Expose()
  locationName: number;
}
