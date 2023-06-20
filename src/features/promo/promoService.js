import axios from "axios";
import { base_url, config} from "../../utils/axiosConfig";

const getPromo = async () => {
    const response=await axios.post(`${base_url}/product/list_all_promo`, config);
    if(response.data){
      return response.data;  
    }
}

export const promoService ={
    getPromo
};
