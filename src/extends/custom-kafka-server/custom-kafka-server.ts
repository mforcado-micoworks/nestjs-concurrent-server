import {
  CustomTransportStrategy,
  KafkaOptions,
  ServerKafka,
  Transport,
} from '@nestjs/microservices';

export const NEW_KAFKA_TRANSPORT = Symbol('NEW_KAFKA_TRANSPORT');

export class CustomKafkaServer
  extends ServerKafka
  implements CustomTransportStrategy
{
  // @ts-expect-error -- This is a temporary hack.
  // Follow this PR. https://github.com/nestjs/nest/pull/14606
  transportId: symbol;

  constructor(options: Required<KafkaOptions>['options'], transportId: symbol) {
    super(options);
    this.transportId = transportId;
  }
}
