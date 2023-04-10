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
export declare class CartService {
    get(correo: any): Promise<import("mongoose").Document<unknown, {}, {
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    }> & Omit<{
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    add(usuario: any): Promise<import("mongoose").Document<unknown, {}, {
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    }> & Omit<{
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(correo: any, data: any): Promise<import("mongoose").Document<unknown, {}, {
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    }> & Omit<{
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    postProduct(correo: any, data: any): Promise<import("mongoose").Document<unknown, {}, {
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    }> & Omit<{
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteProduct(correo: any, data: any): Promise<import("mongoose").Document<unknown, {}, {
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    }> & Omit<{
        productos: import("mongoose").Types.DocumentArray<any> | any[] | {
            [x: string]: any;
        }[] | any[];
        timestamp?: string;
        author?: {
            name?: string;
            lastName?: string;
            address?: string;
            phoneNumber?: number;
            username?: string;
        };
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    delete(correo: any): Promise<import("mongodb").DeleteResult>;
}
