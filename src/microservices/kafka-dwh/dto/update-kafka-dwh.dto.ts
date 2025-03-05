import { PartialType } from '@nestjs/mapped-types';
import { CreateKafkaDwhDto } from './create-kafka-dwh.dto';

export class UpdateKafkaDwhDto extends PartialType(CreateKafkaDwhDto) {
  id: number;
}
