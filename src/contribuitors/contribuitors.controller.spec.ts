import { Test, TestingModule } from '@nestjs/testing';
import { ContribuitorsController } from './contribuitors.controller';
import { ContribuitorsService } from './contribuitors.service';

describe('ContribuitorsController', () => {
  let controller: ContribuitorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContribuitorsController],
      providers: [ContribuitorsService],
    }).compile();

    controller = module.get<ContribuitorsController>(ContribuitorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
