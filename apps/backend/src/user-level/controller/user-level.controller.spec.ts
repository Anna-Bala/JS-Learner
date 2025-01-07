import { Test, TestingModule } from '@nestjs/testing';
import { UserLevelController } from './user-level.controller';

describe('UserLevelController', () => {
  let controller: UserLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLevelController],
    }).compile();

    controller = module.get<UserLevelController>(UserLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
