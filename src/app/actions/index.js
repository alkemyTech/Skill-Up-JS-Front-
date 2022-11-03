import axios from "axios";
import { GET_CATEGORIES } from "./types";

export function getCategories(){
    return async function (dispatch){
        try{
            var response = await axios.get("http://localhost:3003/categories");
            return dispatch({type:GET_CATEGORIES, payload: response.data})
        }
        catch(e){
            console.log(e.message)
        }
    }
}