/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProductService } from '../2Service/product.service';
import { DTO } from '../0Dto/product.dto';
export declare class ProductController {
    private service;
    constructor(service: ProductService);
    get(): Promise<(import("mongoose").Document<unknown, {}, {
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    }> & Omit<{
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    getName(product: DTO): Promise<(import("mongoose").Document<unknown, {}, {
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    }> & Omit<{
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    create(product: DTO): Promise<import("mongoose").Document<unknown, {}, {
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    }> & Omit<{
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(id: string, product: DTO): Promise<import("mongoose").Document<unknown, {}, {
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    }> & Omit<{
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, {
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    }> & Omit<{
        timestamp?: string;
        name?: string;
        description?: string;
        code?: string;
        price?: number;
        photo?: string;
        stock?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
