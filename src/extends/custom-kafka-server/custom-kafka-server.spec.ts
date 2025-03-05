import { CustomKafkaServer } from './custom-kafka-server';

describe('CustomKafkaServer', () => {
  it('should be defined', () => {
    expect(new CustomKafkaServer({})).toBeDefined();
  });
});
