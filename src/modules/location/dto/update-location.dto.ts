import { Exclude, Expose } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { AreaUnit } from '../../../domain/types';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends CreateLocationDto {}
