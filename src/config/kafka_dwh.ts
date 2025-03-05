import { KafkaOptions } from '@nestjs/microservices';

export const KAFKA_DWH_CLIENT_CONFIG: KafkaOptions = {
  options: {
    client: {
      clientId: 'kafka-dwh',
      brokers: ['localhost:9098'],
    },
    consumer: {
      groupId: 'kafka-dwh-consumer',
    },
  },
};
