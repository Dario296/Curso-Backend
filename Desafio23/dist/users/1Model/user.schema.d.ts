import * as mongoose from 'mongoose';
declare const Model: mongoose.Model<{
    name?: string;
    photo?: string;
    lastName?: string;
    address?: string;
    phoneNumber?: number;
    username?: string;
    admin?: boolean;
    age?: number;
    password?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string;
    photo?: string;
    lastName?: string;
    address?: string;
    phoneNumber?: number;
    username?: string;
    admin?: boolean;
    age?: number;
    password?: string;
}> & Omit<{
    name?: string;
    photo?: string;
    lastName?: string;
    address?: string;
    phoneNumber?: number;
    username?: string;
    admin?: boolean;
    age?: number;
    password?: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    photo?: string;
    lastName?: string;
    address?: string;
    phoneNumber?: number;
    username?: string;
    admin?: boolean;
    age?: number;
    password?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string;
    photo?: string;
    lastName?: string;
    address?: string;
    phoneNumber?: number;
    username?: string;
    admin?: boolean;
    age?: number;
    password?: string;
}>> & Omit<mongoose.FlatRecord<{
    name?: string;
    photo?: string;
    lastName?: string;
    address?: string;
    phoneNumber?: number;
    username?: string;
    admin?: boolean;
    age?: number;
    password?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default Model;
