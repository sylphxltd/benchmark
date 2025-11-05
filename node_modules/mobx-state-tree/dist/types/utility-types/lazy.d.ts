import { IType } from "../../core/type/type";
interface LazyOptions<T extends IType<any, any, any>, U> {
    loadType: () => Promise<T>;
    shouldLoadPredicate: (parent: U) => boolean;
}
export declare function lazy<T extends IType<any, any, any>, U>(name: string, options: LazyOptions<T, U>): T;
export {};
