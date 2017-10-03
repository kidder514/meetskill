import axios from "axios";

export const placeOrder = (order) => {
    return {
    	type: "PLACE_ORDER",
    	order: order
    }
}
