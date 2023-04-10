import { Module } from '@nestjs/common';
import { CartController } from './3Controller/cart.controller';
import { CartService } from './2Service/cart.service';

@Module({
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
