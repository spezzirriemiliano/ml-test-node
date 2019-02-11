import { IItem, IItemResult } from "../interfaces/interfaces";

export default class ItemsTransformers {

    public static searchTransformer(response: any) {
        const itemsResult: IItemResult = {
            author: {
                lastname: "Spezzirri",
                name: "Emiliano"
            },
            categories: [],
            items: []
        };

        for (const result of response.results) {
            const price = result.price.toString().split(".");
            const includeItem: IItem = {
                condition: result.condition,
                free_shipping: result.shipping.free_shipping,
                id: result.id,
                picture: result.thumbnail,
                price: {
                    amount: price[0] ? price[0] : 0,
                    currency: result.currency_id,
                    decimals: price[1] ? price[1] : 0
                },
                title: result.title,
            };
            itemsResult.items.push(includeItem);
        }

        return itemsResult;
    }

    public static itemTransformer(item: any, description: any) {
        return {item, description};
    }
}
