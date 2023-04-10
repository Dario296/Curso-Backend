import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../2Service/product.service'
import { DTO } from '../0Dto/product.dto'


@Controller('product')
export class ProductController {
    constructor ( private service: ProductService ) {}

    @Get()
    async get() {
        const data = await this.service.get();
        return data;
    };

    @Get('/name')
    async getName(@Body() product: DTO) {
        return await this.service.getName(product.name);
    };

    @Post()
    async create(@Body() product: DTO) {
        return await this.service.create(product);
    };

    @Put(':id')
    async update(@Param('id') id: string, @Body() product: DTO) {
        return await this.service.update(id, product);
    };

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    };
};