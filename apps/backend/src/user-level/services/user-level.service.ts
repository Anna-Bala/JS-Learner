import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LevelSaveDto } from '../dtos/LevelSave.dto';
import { UserLevel } from '../../typeorm/entities/UserLevel';

@Injectable()
export class UserLevelService {
  constructor(
    @InjectRepository(UserLevel)
    private readonly userLevelRepository: Repository<UserLevel>,
  ) {}

  async fetchLevelSaveByUserId(userId: number): Promise<UserLevel[]> {
    return this.userLevelRepository.find({
      where: { user: { id: userId } },
      relations: ['level'],
    });
  }

  async saveUserLevel(levelSaveDto: LevelSaveDto): Promise<UserLevel> {
    const { userId, levelId, score } = levelSaveDto;

    let levelSave = await this.userLevelRepository.findOne({
      where: { user: { id: userId }, level: { id: levelId } },
    });

    if (levelSave) {
      levelSave.score = score;
    } else {
      levelSave = this.userLevelRepository.create({
        user: { id: userId },
        level: { id: levelId },
        score,
      });
    }

    return this.userLevelRepository.save(levelSave);
  }
}
