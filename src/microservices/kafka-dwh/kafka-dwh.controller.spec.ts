import { Test, TestingModule } from '@nestjs/testing';
import { KafkaDwhController } from './kafka-dwh.controller';
import { KafkaDwhService } from './kafka-dwh.service';

describe('KafkaDwhController', () => {
  let controller: KafkaDwhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KafkaDwhController],
      providers: [KafkaDwhService],
    }).compile();

    controller = module.get<KafkaDwhController>(KafkaDwhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
