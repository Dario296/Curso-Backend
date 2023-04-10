import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductModule, CartModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
