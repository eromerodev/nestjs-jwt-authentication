import { Controller, Inject, Get, HttpCode, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BearerTokenGuard } from '../../shared/bearer-token.guard';
import { IStockService } from '../interfaces/stock-service.interface';

@UseGuards(BearerTokenGuard)
@Controller({ path: 'api/v1/stocks', version: '1' })
@ApiBearerAuth('jwt')
@ApiTags('Stock Market')
export class StockController {
  /**
   *
   */
  constructor(
    @Inject('StockService')
    private readonly stockService: IStockService,
  ) {}

  @ApiOperation({
    summary: 'Returns all stocks',
    tags: ['Stock Market'],
  })
  @Get('/')
  @HttpCode(200)
  async findAll() {
    return await this.stockService.findAll();
  }
}
