import { Test, TestingModule } from '@nestjs/testing';
import { KafkaDwhService } from './kafka-dwh.service';

describe('KafkaDwhService', () => {
  let service: KafkaDwhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaDwhService],
    }).compile();

    service = module.get<KafkaDwhService>(KafkaDwhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
