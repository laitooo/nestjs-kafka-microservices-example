import { Controller, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MakePaymentDto } from '@nestjs-microservices/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('process_payment')
  handleProcessPayment(@Payload(ValidationPipe) dto: MakePaymentDto) {
    this.appService.processPayment(dto);
  }
}
