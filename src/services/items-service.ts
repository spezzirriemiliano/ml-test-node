import axios from "axios";

export default class ItemsService {

    public static ML_API_URL = "https://api.mercadolibre.com";

    public static async search(query: string) {
        try {
          const searchUrl = `${this.ML_API_URL}/sites/MLA/search`;
          const response = await axios.get(searchUrl, {
            params: {
              limit: 4,
              q: query
            }});
          return response.data;
        } catch (error) {
          console.error(error);
          throw {status: error.response.status, message: error.response.data.message};
        }
      }

    public static async getItem(id: string) {
        try {
            const itemPromise = axios.get(`${this.ML_API_URL}/items/${id}`);
            const itemDescriptionPromise = axios.get(`${this.ML_API_URL}/items/${id}/description`).catch(() => {
              return {data: {description: {plain_text: ""}}};
            });
            const [item, itemDescription] = await Promise.all([itemPromise, itemDescriptionPromise]);
            return { item: item.data, itemDescription: itemDescription.data};
        } catch (error) {
            console.error(error);
            throw {status: error.response.status, message: error.response.data.message};
        }

    }

}
