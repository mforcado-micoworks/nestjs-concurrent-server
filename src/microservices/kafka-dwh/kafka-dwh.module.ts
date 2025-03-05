import { Module } from '@nestjs/common';
import { KafkaDwhService } from './kafka-dwh.service';
import { KafkaDwhController } from './kafka-dwh.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_DWH_CLIENT_CONFIG } from 'src/config/kafka_dwh';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_DWH_SERVICE',
        transport: Transport.KAFKA,
        ...KAFKA_DWH_CLIENT_CONFIG,
      },
    ]),
  ],
  controllers: [KafkaDwhController],
  providers: [KafkaDwhService],
})
export class KafkaDwhModule {}
