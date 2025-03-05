import { KafkaOptions } from '@nestjs/microservices';

export const KAFKA_MMC_CLIENT_CONFIG: KafkaOptions = {
  options: {
    client: {
      clientId: 'kafka-mmc',
      brokers: ['localhost:9094'],
    },
    consumer: {
      groupId: 'kafka-mmc-consumer',
    },
  },
};
