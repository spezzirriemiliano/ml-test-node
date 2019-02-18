import ItemsService from "../services/items-service";
import ItemsTransformer from "../transformers/items-transformers";

export default class ItemController {

  public static async search(req: any, res: any) {
    try {
      const search = await ItemsService.search(req.query.q);
      return res.json(ItemsTransformer.searchTransformer(search));
    } catch (error) {
      console.log(error);
      return res.status(500).json({error});
    }
  }

  public static async getItem(req: any, res: any) {
    try {
      const {item, itemDescription} = await ItemsService.getItem(req.params.id);
      return res.json(ItemsTransformer.itemTransformer(item, itemDescription));
    } catch (error) {
      console.log(error);
      return res.status(500).json({error});
    }
  }

}
