import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { LevelSaveDto } from '../dtos/LevelSave.dto';
import { UserLevel } from '../../typeorm/entities/UserLevel';
import { UserLevelService } from '../services/user-level.service';

@Controller('level-save')
export class UserLevelController {
  constructor(private readonly userLevelService: UserLevelService) {}

  @Get(':userId')
  async getLevelSaveDataByUserId(@Param('userId') userId: number) {
    const levelSaveData =
      await this.userLevelService.fetchLevelSaveByUserId(userId);
    return levelSaveData;
  }

  @Post()
  async saveUserLevel(@Body() levelSaveDto: LevelSaveDto): Promise<UserLevel> {
    return this.userLevelService.saveUserLevel(levelSaveDto);
  }
}
