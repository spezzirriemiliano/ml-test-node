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
    address?: string;
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

export interface IItemDetail extends IItem {
    category_id: string;
    description: string;
    sold_quantity: number;
}

export interface IItemDetailResult {
    author: IAuthor;
    item: IItemDetail;
}
