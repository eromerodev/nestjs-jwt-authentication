import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StockDto } from '../dto/stock.dto';
import { IStockClient } from '../interfaces/stock-client.interface';

@Injectable()
export class StockHttpClient implements IStockClient {
  url: string;
  /**
   *
   */
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.url = this.configService.get<string>('mockApiUrl');
  }
  async findAll(): Promise<StockDto[]> {
    const response = await firstValueFrom(this.httpService.get(this.url));

    if (response.status !== 200) {
      throw new InternalServerErrorException(
        'An error occurred while processing your request',
      );
    }

    return response.data as StockDto[];
  }
}
