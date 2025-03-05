import { Module } from '@nestjs/common';
import { KafkaMmcService } from './kafka-mmc.service';
import { KafkaMmcController } from './kafka-mmc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_MMC_CLIENT_CONFIG } from 'src/config/kafka_mmc';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_MMC_SERVICE',
        transport: Transport.KAFKA,
        ...KAFKA_MMC_CLIENT_CONFIG,
      },
    ]),
  ],
  controllers: [KafkaMmcController],
  providers: [KafkaMmcService],
})
export class KafkaMmcModule {}
