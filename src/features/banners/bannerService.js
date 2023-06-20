import axios from "axios";
import { base_url} from "../../utils/axiosConfig";

const getBanners = async()=>{
    const response = await axios.get(`${base_url}/banner/getAll`);
    console.log(response)
    if(response){
        return response;
    }
}

export const bannerService ={
     getBanners
};