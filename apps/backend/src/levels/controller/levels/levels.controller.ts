import { Controller, Get } from '@nestjs/common';

import { LevelsService } from '../../services/levels/levels.service';

@Controller('levels')
export class LevelsController {
  constructor(private levelsService: LevelsService) {}

  @Get()
  async getLevels() {
    const levels = await this.levelsService.fetchLevels();
    return levels;
  }
}
