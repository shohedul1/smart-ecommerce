// 'use client';

import { getProducts } from "@/helpers";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products } from "../../type";


const Products = async () => {
    const products = await getProducts();
   
    
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
        
            {
                products?.data?.map((item:Products) => (
                  <ProductsData item={item} key={item.id}/>
                
                    
                ))
            }

    </Container>
  )
}

export default Products;