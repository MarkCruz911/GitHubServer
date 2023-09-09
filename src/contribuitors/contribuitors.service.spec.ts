import { Test, TestingModule } from '@nestjs/testing';
import { ContribuitorsService } from './contribuitors.service';

describe('ContribuitorsService', () => {
  let service: ContribuitorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContribuitorsService],
    }).compile();

    service = module.get<ContribuitorsService>(ContribuitorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
