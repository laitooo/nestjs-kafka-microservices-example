import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_user')
  createUser(
    @Payload(ValidationPipe) dto: CreateUserDto
  ) {
    this.appService.createUser(dto);
  }

  @MessagePattern('get_user')
  getUser(
    @Payload('userId', ParseIntPipe) userId: number
  ) {
    console.log('this is get user from auth mcse')
    return this.appService.getUser(userId);
  }
}
