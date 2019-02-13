import { IItem, IItemResult } from "../interfaces/interfaces";

export default class ItemsTransformers {

    public static searchTransformer(response: any) {
        const itemsResult: IItemResult = {
            author: {
                lastname: "Spezzirri",
                name: "Emiliano"
            },
            categories: ItemsTransformers.transformCategories(response.filters),
            items: ItemsTransformers.transforItems(response.results)
        };
        return itemsResult;
    }

    public static itemTransformer(item: any, description: any) {
        return {item, description};
    }

    private static transformCategories(filters: any) {
        const categoryFilter = filters.find((c: any) => c.id === "category");
        if (categoryFilter && categoryFilter.values && categoryFilter.values[0]) {
            return categoryFilter.values[0].path_from_root.map((c: any) => {
                return c.name;
            });
        } else {
            return [];
        }
    }

    private static transforItems(results: any) {
        const items = [];
        for (const result of results) {
            const price = result.price.toString().split(".");
            const includeItem: IItem = {
                address: result.address.state_name,
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
            items.push(includeItem);
        }
        return items;
    }
}
