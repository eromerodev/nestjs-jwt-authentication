import { Inject, Injectable } from '@nestjs/common';
import { StockDto } from '../dto/stock.dto';
import { IStockClient } from '../interfaces/stock-client.interface';
import { IStockService } from '../interfaces/stock-service.interface';

@Injectable()
export class StockService implements IStockService {
  /**
   *
   */
  constructor(
    @Inject('StockClient')
    private readonly stockClient: IStockClient,
  ) {}
  async findAll(): Promise<StockDto[]> {
    return await this.stockClient.findAll();
  }
}
