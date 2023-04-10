import * as mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    productos: mongoose.Types.DocumentArray<any> | any[] | {
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    productos: mongoose.Types.DocumentArray<any> | any[] | {
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
    productos: mongoose.Types.DocumentArray<any> | any[] | {
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
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    productos: mongoose.Types.DocumentArray<any> | any[] | {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    productos: mongoose.Types.DocumentArray<any> | any[] | {
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
}>> & Omit<mongoose.FlatRecord<{
    productos: mongoose.Types.DocumentArray<any> | any[] | {
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
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default Model;
