export default class ItemsTransformers {

    public static searchTransformer(items: any) {
        return items;
    }

    public static itemTransformer(item: any, description: any) {
        return {item, description};
    }
}
