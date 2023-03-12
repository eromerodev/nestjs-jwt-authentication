import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { env } from './config/env';
import { BearerTokenStrategy } from './shared/bearer-token.guard';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
      isGlobal: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    StockModule,
  ],
  controllers: [],
  providers: [BearerTokenStrategy],
})
export class AppModule {}
