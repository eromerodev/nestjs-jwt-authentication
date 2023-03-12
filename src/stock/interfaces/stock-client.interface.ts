import { StockDto } from '../dto/stock.dto';

export interface IStockClient {
  findAll(): Promise<StockDto[]>;
}
