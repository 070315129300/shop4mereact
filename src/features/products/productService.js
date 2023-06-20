import axios from "axios";
import { base_url, config} from "../../utils/axiosConfig";

const getProducts = async()=>{
    const response = await axios.post(`${base_url}/product/product`);
    
    if(response){ 
        return response;
    }
}

const addToWishlist = async(prodId)=>{
    console.log(config);
    const response = await axios.put(`${base_url}/product/addToWishlist`, {prodId}, config);
    if(response.data){
        return response.data;
    }
}

export const productService ={
     getProducts,
     addToWishlist 
};  