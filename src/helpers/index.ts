import { productData } from "@/constants/data";

export const getProducts = async () => {
  const options = {
    headers: {
      Authorization: `Bearer${process.env.STRAPI_API_TOKEN}`
    }
  }

  try {
    const res = await fetch("https://smart-ecommerce.onrender.com/api/products?populate=*", options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}


export const calculatePerecentage = (oldPrice: any, price: any)=>{
  return !!parseFloat(price) && !!parseFloat(oldPrice) ? (100 - (oldPrice / price) * 100).toFixed(0) : 0
}


export const getSingleProduct = (id: number)=>{
  const item = productData.find((product)=>product.id === id);
  return item;
};