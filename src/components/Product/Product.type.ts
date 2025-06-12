export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    tecnicalDetails: string;
    }

    export const dummyProductList: IProduct[] = [{
    id: new Date().toJSON().toString(),
    name: "Product 1",
    price: 10.00,
    description: "This is the description for Product 1.",
    tecnicalDetails: "Technical details for Product 1.",    
}];

export enum PageEnum {
    list,
    add,
    edit
}