import { Body, Controller, Get, Post } from '@nestjs/common';

import { LevelSaveDto } from '../dtos/LevelSave.dto';
import { UserLevel } from '../../typeorm/entities/UserLevel';
import { UserLevelService } from '../services/user-level.service';

@Controller('level-save')
export class UserLevelController {
  constructor(private readonly userLevelService: UserLevelService) {}

  @Get()
  async getLevelSaveData() {
    const levelSaveData = await this.userLevelService.fetchLevelSave();
    return levelSaveData;
  }

  @Post()
  async saveUserLevel(@Body() levelSaveDto: LevelSaveDto): Promise<UserLevel> {
    return this.userLevelService.saveUserLevel(levelSaveDto);
  }
}
