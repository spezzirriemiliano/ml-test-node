
export default class CategoryTransformers {
    public static transform(response: any): any {
        return {
            categories: response.path_from_root.map((categories: any) => {
                return categories.name;
            })
        };
    }
}
