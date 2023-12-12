import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";


interface StoreState {
    productData: Products[],
    userInfo: null | string,
    orderData: []
}

const initialState: StoreState = {
    productData: [],
    userInfo: null,
    orderData: [],
};

export const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        addToCart:(state,action)=>{
            const existingProduct = state.productData.find((item: Products)=>
                item.id === action.payload.id
            );
            if(existingProduct){
                existingProduct.attributes.quantity += action.payload.attributes.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: Products) => item.id === action.payload.id
            );
            existingProduct && existingProduct.attributes.quantity++;
        },
        decreaseQuantity:(state,action)=>{
            const existingProduct = state.productData.find(
                (item: Products) => item.id === action.payload.id
            );
            if(existingProduct?.attributes?.quantity === 1){
                existingProduct.attributes.quantity === 1;
            }else{
                existingProduct && existingProduct.attributes.quantity--;
            }


        },
        deleteProduct: (state,action)=>{
            state.productData = state.productData.filter(
                (item)=> item.id !== action.payload
            );
        },
        resetCart:(state)=>{
            state.productData = [];
        },
    },
});

export const {
     addToCart,
     increaseQuantity,
     decreaseQuantity,
     deleteProduct,
     resetCart,
    } = shoppingSlice.actions;
export default shoppingSlice.reducer;