import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Level } from '../typeorm/entities/Level';
import { SeedService } from './seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Level])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
