import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalcService } from './calc/calc.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CalcService],
})
export class AppModule {}
