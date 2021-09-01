import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    // this.appService.seed()
    // return 'Seed Complete'

    // return this.appService.getEmployeeById(2);

    // return this.appService.deleteEmployee(2);

  }
}
