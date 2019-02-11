export interface IItemResult {
    author: IAuthor;
    categories: string[];
    items: IItem[];
}

export interface IAuthor {
    name: string;
    lastname: string;
}

export interface IItem {
    id: string;
    title: string;
    price: IItemPrice;
    picture: string;
    condition: string;
    free_shipping: boolean;
}

export interface IItemPrice {
    currency: string;
    amount: number;
    decimals: number;
}
