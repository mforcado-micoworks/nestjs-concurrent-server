import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { CustomKafkaServer } from './extends/custom-kafka-server/custom-kafka-server';
import { KAFKA_MMC_SYMBOL } from 'symbols/kafka_mmc';
import { KAFKA_DWH_SYMBOL } from 'symbols/kafka_dwh';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    strategy: new CustomKafkaServer(
      {
        client: {
          clientId: 'kafka-mmc',
          brokers: ['localhost:9094'],
        },
        consumer: {
          groupId: 'kafka-mmc-consumer',
        },
      },
      KAFKA_MMC_SYMBOL,
    ),
  });

  app.connectMicroservice<MicroserviceOptions>({
    strategy: new CustomKafkaServer(
      {
        client: {
          clientId: 'kafka-dwh',
          brokers: ['localhost:9098'],
        },
        consumer: {
          groupId: 'kafka-dwh-consumer',
        },
      },
      KAFKA_DWH_SYMBOL,
    ),
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
