import { Injectable } from '@nestjs/common';
import { CreateKafkaMmcDto } from './dto/create-kafka-mmc.dto';
import { UpdateKafkaMmcDto } from './dto/update-kafka-mmc.dto';

@Injectable()
export class KafkaMmcService {
  create(createKafkaMmcDto: CreateKafkaMmcDto) {
    return 'This action adds a new kafkaMmc';
  }

  findAll() {
    return `This action returns all kafkaMmc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kafkaMmc`;
  }

  update(id: number, updateKafkaMmcDto: UpdateKafkaMmcDto) {
    return `This action updates a #${id} kafkaMmc`;
  }

  remove(id: number) {
    return `This action removes a #${id} kafkaMmc`;
  }
}
