import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Level } from '../typeorm/entities/Level';
import { LevelsController } from './controller/levels/levels.controller';
import { LevelsService } from './services/levels/levels.service';

@Module({
  imports: [TypeOrmModule.forFeature([Level])],
  controllers: [LevelsController],
  providers: [LevelsService],
  exports: [LevelsService],
})
export class LevelsModule {}
