import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserLevel } from '../typeorm/entities/UserLevel';
import { UserLevelController } from './controller/user-level.controller';
import { UserLevelService } from './services/user-level.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserLevel])],
  controllers: [UserLevelController],
  providers: [UserLevelService],
})
export class UserLevelModule {}
