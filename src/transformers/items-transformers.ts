import { IAuthor, IItem, IItemDetail, IItemDetailResult, IItemPrice, IItemResult } from "../interfaces/interfaces";

export default class ItemsTransformers {

    public static searchTransformer(response: any): IItemResult {
        return {
            author: ItemsTransformers.getAuthor(),
            categories: ItemsTransformers.transformCategories(response.filters),
            items: ItemsTransformers.transforItems(response.results)
        };
    }

    public static itemTransformer(item: any, description: any): IItemDetailResult {
        return {
            author: ItemsTransformers.getAuthor(),
            item: ItemsTransformers.transformItemDetail(item, description)
        };
    }

    private static transformItemDetail(item: any, description: any): IItemDetail {
        return {
            condition: item.condition,
            description: description.plain_text || "",
            free_shipping: item.shipping.free_shipping,
            id: item.id,
            picture: item.pictures && item.pictures[0] ? item.pictures[0].url : item.thumbnail,
            price: ItemsTransformers.getPrice(item),
            sold_quantity: item.sold_quantity,
            title: item.title,
        };
    }

    private static getAuthor(): IAuthor {
        return {
            lastname: "Spezzirri",
            name: "Emiliano"
        };
    }

    private static getPrice(item: any): IItemPrice {
        const price = item.price.toString().split(".");
        return {
            amount: price[0] ? price[0] : 0,
            currency: item.currency_id,
            decimals: price[1] ? price[1] : 0
        };
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
        const items: IItem[] = [];
        for (const result of results) {
            items.push({
                address: result.address.state_name,
                condition: result.condition,
                free_shipping: result.shipping.free_shipping,
                id: result.id,
                picture: result.thumbnail,
                price: ItemsTransformers.getPrice(result),
                title: result.title,
            });
        }
        return items;
    }
}
