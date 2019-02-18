import CategoryService from "../services/category-service";
import CategoryTransformers from "../transformers/category-transformers";

export default class CategoryController {

  public static async getCategories(req: any, res: any) {
    try {
      const response = await CategoryService.getCategories(req.params.id);
      return res.json(CategoryTransformers.transform(response));
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
  }
}
