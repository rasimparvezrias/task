import axios from "axios";
import * as types from "./actionTypes";
const getProduct = (payload = 'products',limit='') => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });

   const data = [
        {
            "id": 1,
            "quantity": 1,
            "image": "/images/image1.svg",
            "heading": "MATERIALS, CARE AND ORIGIN",
            "producttitle": "CREASED JACQUARD TOP",
            "desc": "Boat neck top with long full sleeves. Creased-effect fabric.",
            "price": "₹ 2,590.00",
            "pricenum": 2590,
            "materialdesc": "We work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.",
            "materialshell": "OUTER SHELL",
            "materialtype": "94% polyester · 6% elastane",
            "care": "CARE\nCaring for your clothes is caring for the environment.\nOnly wash your garments when necessary; sometimes you only need to freshen them up. Since washing slowly deteriorates fabrics, if you wash your garments less often, you can lengthen their life and reduce the consumption of water and energy used in care processes.\nHand wash at max. 30ºC/86ºF\nDo not use bleach\nDo not iron\nDo not dry clean\nDo not tumble dry\nWash inside out\nDry on a flat surface",
            "origin": "MATERIALS\nWe work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.\nOUTER SHELL\n94% polyester · 6% elastane",
            "coloravailable": "",
            "color": ""
        },
       
   
    ]
    return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: data });


}

const getSingleProduct = (payload) => (dispatch) => {
    dispatch({ type: types.GET_SINGLE_REQUEST });
    
   const data ={
    "id": 1,
    "quantity": 1,
    "image": "/images/image1.svg",
    "image1": "/images/image2.svg",
    "image2": "/images/image3.svg",
    "image3":  "/images/image4.svg",
    "heading": "MATERIALS, CARE AND ORIGIN",
    "producttitle": "JONATHAN SIMKHAI",
    "desc": "Lurex Linen Viscose Jacket in Conchiglia",
    "price": "$225",
    "pricenum": 4990,
    "materialdesc": "We work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.\nThanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our garments in order to know the traceability of our products.",
    "materialshell": "UPPER",
    "materialtype": "100% polyester",
    "care": "CARE\nCaring for your clothes is caring for the environment.\nSimple steps like cleaning your clothing with a dry cotton cloth or a soft brush, depending on the characteristics of the product, can help you care for it. Whenever possible, try to use products that are respectful of the environment.\nDo not wash\nDo not submerge in water\nDo not use bleach\nLeather/Patent finish/Glossy finish. Clean with a dry cotton cloth.\nDo not iron\nSuede/Nubuck/Split suede. Clean with a soft brush or firm sponge.\nDo not dry clean\nLeather. Colourless or matching colour wax may be applied.\nDo not tumble dry\nSuede/Nubuck/Split suede. Treatable with protective or dust repellent sprays (water repellent products for mops).",
    "origin": "MATERIALS\nWe work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.\nTo assess compliance, we have developed a programme of audits and continuous improvement plans.\nUPPER\n100% polyester\nLINING\n100% polyurethane\nSOLE\n100% polyurethane thermoplastic\nINSOLE\n85% polyurethane · 15% polyester",
    "coloravailable": "",
    "color": ""
}

    
   
           return dispatch({ type: types.GET_SINGLE_SUCCESS, payload: data });
}
export { getProduct,getSingleProduct }

