import axios from "axios";
import { base_url,} from "../../utils/axiosConfig";

const getCategories= async()=>{
    const response = await axios.get(`${base_url}/category/getAll`);
    if(response){ 
        return response;
    }
}


export const categoriesService ={
     getCategories
     
};  