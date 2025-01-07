import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Level } from '../../../typeorm/entities/Level';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level) private levelRepository: Repository<Level>,
  ) {}

  fetchLevels() {
    return this.levelRepository.find();
  }
}
