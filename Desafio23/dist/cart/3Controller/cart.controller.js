"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("../2Service/cart.service");
const product_service_1 = require("../../product/2Service/product.service");
let CartController = class CartController {
    constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
    }
    ;
    async get(req, res) {
        const correo = req.user.username;
        const avatar = req.user.photo;
        const saludo = `Bienvenido ${correo}`;
        const result = await this.cartService.get(correo);
        res.render('UserLogin/carrito', { result, avatar, saludo });
    }
    ;
    async addData(req, res) {
        const usuario = req.user;
        const correo = usuario.username;
        const id = req.body.id;
        const producto = await this.productService.getById(id);
        const cart = await this.cartService.get(correo);
        if (cart === null) {
            await this.cartService.add(usuario);
        }
        ;
        await this.cartService.postProduct(correo, producto);
        res.redirect('/productos');
    }
    ;
    async deleteData(req, res) {
        const correo = req.user.username;
        const id = req.body.id;
        const producto = await this.productService.getById(id);
        await this.cartService.deleteProduct(correo, producto);
        res.redirect('/carrito');
    }
    ;
    async delete(req, res) {
        const correo = req.user.username;
        await this.cartService.delete(correo);
        res.redirect('/productos');
    }
    ;
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addData", null);
__decorate([
    (0, common_1.Post)('/id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteData", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "delete", null);
CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService, product_service_1.ProductService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map