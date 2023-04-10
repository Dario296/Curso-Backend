import { Module } from '@nestjs/common';
import { ProductController } from './3Controller/product.controller';
import { ProductService } from './2Service/product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService]
})

export class ProductModule {}