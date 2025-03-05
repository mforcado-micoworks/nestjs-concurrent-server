import { Test, TestingModule } from '@nestjs/testing';
import { KafkaMmcService } from './kafka-mmc.service';

describe('KafkaMmcService', () => {
  let service: KafkaMmcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaMmcService],
    }).compile();

    service = module.get<KafkaMmcService>(KafkaMmcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
