import axios from "axios";

// redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}restaurant?city=Mumbai`,
    });
   
   // console.log(restaurantList.data)
    return dispatch({
      type: GET_RESTAURANT,
      payload: restaurantList.data.restaurants,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getSpecificRestaurant = (_id) => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}restaurant/${_id}`,
    });

    //console.log(restaurantList.data)

    return dispatch({
      type: GET_SPECIFIC_RESTAURANT,
      payload: restaurantList.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
