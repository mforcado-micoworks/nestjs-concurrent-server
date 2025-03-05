import { Module } from '@nestjs/common';
import { KafkaMmcModule } from './microservices/kafka-mmc/kafka-mmc.module';
import { KafkaDwhModule } from './microservices/kafka-dwh/kafka-dwh.module';

@Module({
  imports: [KafkaMmcModule, KafkaDwhModule],
})
export class AppModule {}
