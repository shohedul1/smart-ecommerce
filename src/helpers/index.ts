
export const getProducts = async () => {
  const options = {
    headers: {
      Authorization: `Bearer${process.env.STRAPI_API_TOKEN}`
    }
  }

  try {
    const res = await fetch("http://127.0.0.1:1337/api/products?populate=*", options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}


export const calculatePerecentage = (oldPrice: any, price: any)=>{
  return !!parseFloat(price) && !!parseFloat(oldPrice) ? (100 - (oldPrice / price) * 100).toFixed(0) : 0
}
