import { CartService } from '../2Service/cart.service';
import { Request, Response } from "express";
import { ProductService } from "../../product/2Service/product.service";
export declare class CartController {
    private cartService;
    private productService;
    constructor(cartService: CartService, productService: ProductService);
    get(req: Request, res: Response): Promise<void>;
    addData(req: Request, res: Response): Promise<void>;
    deleteData(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
