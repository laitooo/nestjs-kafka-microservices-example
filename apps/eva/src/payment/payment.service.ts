import { MakePaymentDto } from '@nestjs-microservices/shared/dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_MICROSERVICE') private readonly paymentClient: ClientKafka
  ) {}

  makePayment(dto: MakePaymentDto) {
    this.paymentClient.emit('process_payment', JSON.stringify(dto));
  }
}
