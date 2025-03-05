import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateKafkaDwhDto } from './dto/create-kafka-dwh.dto';
import { KAFKA_DWH_SYMBOL } from 'symbols/kafka_dwh';

@Controller()
export class KafkaDwhController {
  @EventPattern('createKafkaDwh', KAFKA_DWH_SYMBOL)
  create(@Payload() createKafkaDwhDto: CreateKafkaDwhDto) {
    console.log('from dwh', createKafkaDwhDto);
  }
}
