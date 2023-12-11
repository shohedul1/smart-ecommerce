import Container from "@/components/Container";
import SingleProduct from "@/components/SingleProduct";
import { getSingleProduct } from "@/helpers";

type Props ={
    searchParams:{[key:string]: string | string[] |undefined}
};

const ProductPage = ({searchParams}: Props) => {
   const _idstring = searchParams?.id;
   const id = Number(_idstring);
   const product = getSingleProduct(id);
//    console.log(product)
  
  return (
    <div>
        <Container>
            <SingleProduct product={product}/>
        </Container>
    </div>
  )
}

export default ProductPage