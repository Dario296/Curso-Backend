import { Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { CartService } from '../2Service/cart.service';
import { Request, Response } from "express";
import { ProductService } from "../../product/2Service/product.service";

@Controller('cart')
export class CartController {

    constructor (private cartService: CartService, private productService: ProductService ) {};

    @Get()
    async get (@Req() req: Request, @Res() res: Response) {
        const correo = req.user.username;
        const avatar = req.user.photo;
        const saludo = `Bienvenido ${correo}`;
        const result = await this.cartService.get(correo);
        res.render('UserLogin/carrito', { result, avatar, saludo });
    };

    @Post()
    async addData (@Req() req: Request, @Res() res: Response) {
        const usuario = req.user;
        const correo = usuario.username;
        const id = req.body.id;
        const producto = await this.productService.getById(id);
        const cart = await this.cartService.get(correo);
        if (cart === null) {
            await this.cartService.add(usuario);
        };
        await this.cartService.postProduct(correo, producto)
        res.redirect('/productos');
    };

    @Post('/id')
    async deleteData (@Req() req: Request, @Res() res: Response) {
        const correo = req.user.username;
        const id = req.body.id;
        const producto = await this.productService.getById(id);
        await this.cartService.deleteProduct(correo, producto);
        res.redirect('/carrito');
    };

    @Delete()
    async delete (@Req() req: Request, @Res() res: Response) {
        const correo = req.user.username;
        await this.cartService.delete(correo);
        res.redirect('/productos');
    };
}
