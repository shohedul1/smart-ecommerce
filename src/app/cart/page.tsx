'use client';

import Container from "@/components/Container";
import { useSelector } from "react-redux";
import { StateProps } from "../../../type";
import CartItem from "@/components/CartItem";

const CartPage = () => {
    const {productData} = useSelector((state:StateProps)=>state?.shopping);
  return (
    <Container>
        <h2 className="text-2xl font-semibold mb-w">Cart</h2>
        <div>
            <CartItem/>
        </div>
    </Container>
  )
}

export default CartPage