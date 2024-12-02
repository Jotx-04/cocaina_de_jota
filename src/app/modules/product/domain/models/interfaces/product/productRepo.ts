import { IProduct } from "./IProduct";

export interface ProductRepo {
    create(product: IProduct): Promise<void>;
    update(product: IProduct): Promise<void>;
    delete(id: number): Promise<void>;
    getAll(): Promise<IProduct[]>;
    getById(id: number): Promise<IProduct | undefined>;
}