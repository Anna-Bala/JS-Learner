import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { LevelSaveDto } from '../dtos/LevelSave.dto';
import { UserLevel } from '../../typeorm/entities/UserLevel';
import { UserLevelService } from '../services/user-level.service';

const getUserScoreSum = (data) => {
  const scoreSums = {};

  data.forEach((item) => {
    const username = item.user.username;
    const score = item.score;

    if (scoreSums[username]) {
      scoreSums[username] += score;
    } else {
      scoreSums[username] = score;
    }
  });

  return scoreSums;
};

@Controller('level-save')
export class UserLevelController {
  constructor(private readonly userLevelService: UserLevelService) {}

  @Get()
  async getLevelSaveData() {
    const levelSaveData = await this.userLevelService.fetchLevelSave();
    const data = getUserScoreSum(levelSaveData);
    return data;
  }

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
