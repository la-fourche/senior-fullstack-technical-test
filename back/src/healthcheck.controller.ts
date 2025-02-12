import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/healthcheck')
export class HealthcheckController {
  @Get('/')
  createCart() {
    return {
      status: 'ok',
    };
  }
}
