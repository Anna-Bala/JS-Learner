import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Level } from '../typeorm/entities/Level';
import levelsForSeed from './levelsForSeed';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Level)
    private readonly levelRepository: Repository<Level>,
  ) {}

  async seed() {
    for (const level of levelsForSeed) {
      const existingLevel = await this.levelRepository.findOne({
        where: { name: level.name },
      });
      if (!existingLevel) {
        await this.levelRepository.save(level);
        console.log(`Seeded: ${level.name}`);
      }
    }
  }
}
