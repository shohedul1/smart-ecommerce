'use client';
import { useSelector } from "react-redux"
import { StateProps } from "../../../type"
import Container from "@/components/Container";
import CartItem from "@/components/CartItem";


const CartPage = () => {
    const { productData } = useSelector((state: StateProps) => state?.shopping);
  return (
    <Container>
        <h2 className="text-3xl font-semibold mb-2">Cart</h2>
        <div>
            <CartItem/>
        </div>
    </Container>
  )
}

export default CartPage