import { Test, TestingModule } from '@nestjs/testing';
import { KafkaMmcController } from './kafka-mmc.controller';
import { KafkaMmcService } from './kafka-mmc.service';

describe('KafkaMmcController', () => {
  let controller: KafkaMmcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KafkaMmcController],
      providers: [KafkaMmcService],
    }).compile();

    controller = module.get<KafkaMmcController>(KafkaMmcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
