import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StockController } from './api/stock.controller';
import { StockHttpClient } from './clients/stock-http.client';
import { StockService } from './services/stock-service';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [StockController],
  providers: [
    {
      provide: 'StockService',
      useClass: StockService,
    },
    {
      provide: 'StockClient',
      useClass: StockHttpClient,
    },
  ],
})
export class StockModule {}
