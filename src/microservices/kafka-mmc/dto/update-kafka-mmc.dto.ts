import { PartialType } from '@nestjs/mapped-types';
import { CreateKafkaMmcDto } from './create-kafka-mmc.dto';

export class UpdateKafkaMmcDto extends PartialType(CreateKafkaMmcDto) {
  id: number;
}
