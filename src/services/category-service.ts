import axios from "axios";

export default class CategoryService {

    public static ML_API_URL = "https://api.mercadolibre.com";

    public static async getCategories(categoryId: string) {
        try {
          const url = `${this.ML_API_URL}/categories/${categoryId}`;
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          console.error(error);
          return {};
        }
      }

}
