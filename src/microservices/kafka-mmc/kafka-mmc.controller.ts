import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateKafkaMmcDto } from './dto/create-kafka-mmc.dto';
import { KAFKA_MMC_SYMBOL } from 'symbols/kafka_mmc';

@Controller()
export class KafkaMmcController {
  @EventPattern('createKafkaMmc', KAFKA_MMC_SYMBOL)
  create(@Payload() createKafkaMmcDto: CreateKafkaMmcDto) {
    console.log('from mmc', createKafkaMmcDto);
  }
}
