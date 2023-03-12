import { StockDto } from '../dto/stock.dto';

export interface IStockService {
  findAll(): Promise<StockDto[]>;
}
