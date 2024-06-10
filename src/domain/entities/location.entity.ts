import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  JoinColumn,
} from 'typeorm';
import { AreaUnit } from '../types';
import { BaseEntity } from './base.entity';
import { Nullable } from '../../common/types';

@Entity()
@Tree('materialized-path')
export class Location extends BaseEntity {
  constructor(partial: Partial<Location>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  locationId: number;

  @Column({ type: 'varchar', length: 120 })
  locationName: string;

  @Column({ type: 'varchar', length: 50 })
  locationNumber: string;

  @Column({ type: 'varchar', length: 50 })
  building: string;

  @Column({ type: 'float' })
  area: number;

  @Column({ type: 'varchar', length: 20, default: AreaUnit.SquareMeters })
  unit: AreaUnit;

  @Column({ type: 'int', nullable: true })
  parentLocationId: Nullable<number>;

  @TreeChildren()
  children: Location[];

  @TreeParent()
  @JoinColumn({ name: 'parent_location_id' })
  parent: Location;
}
