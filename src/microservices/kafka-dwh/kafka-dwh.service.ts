import { Injectable } from '@nestjs/common';
import { CreateKafkaDwhDto } from './dto/create-kafka-dwh.dto';
import { UpdateKafkaDwhDto } from './dto/update-kafka-dwh.dto';

@Injectable()
export class KafkaDwhService {
  create(createKafkaDwhDto: CreateKafkaDwhDto) {
    return 'This action adds a new kafkaDwh';
  }

  findAll() {
    return `This action returns all kafkaDwh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kafkaDwh`;
  }

  update(id: number, updateKafkaDwhDto: UpdateKafkaDwhDto) {
    return `This action updates a #${id} kafkaDwh`;
  }

  remove(id: number) {
    return `This action removes a #${id} kafkaDwh`;
  }
}
