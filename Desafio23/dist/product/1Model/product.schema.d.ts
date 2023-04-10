import * as mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    timestamp?: string;
    name?: string;
    description?: string;
    code?: string;
    price?: number;
    photo?: string;
    stock?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    timestamp?: string;
    name?: string;
    description?: string;
    code?: string;
    price?: number;
    photo?: string;
    stock?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    timestamp?: string;
    name?: string;
    description?: string;
    code?: string;
    price?: number;
    photo?: string;
    stock?: number;
}>> & Omit<mongoose.FlatRecord<{
    timestamp?: string;
    name?: string;
    description?: string;
    code?: string;
    price?: number;
    photo?: string;
    stock?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default Model;
