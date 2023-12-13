import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";


interface storeState {
    productData: Products[];
    userInfo: null | string;
    orderData: [];
}

const initialState:storeState = {
    productData: [],
    userInfo: null,
    orderData: [],
};

export const shoppingSlice = createSlice({
    name:"shopping",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.productData.find((item:Products)=> item.id == action.payload.id);

            if(existingProduct){
                existingProduct.attributes.quantity += action.payload.attributes.quantity
            }else{
                state.productData.push(action.payload);
            }
        },
        increaseQuantity: (state, action)=>{
            const existingProduct = state.productData.find((item:Products)=> item.id == action.payload.id);
            existingProduct && existingProduct.attributes.quantity++;
        },
        decreaseQuantity: (state,action)=>{
            const existingProduct = state.productData.find((item:Products)=> item.id == action.payload.id);
            if(existingProduct?.attributes?.quantity ===1){
                existingProduct.attributes.quantity ===1
            }else{
                existingProduct && existingProduct.attributes.quantity--;
            }


        },
        deleteProduct: (state, action)=>{
            state.productData = state.productData.filter((item)=> item.id !== action.payload);
        },
        resetCart: (state)=>{
            state.productData = [];
        },
        addUser:(state,action)=>{
            state.userInfo = action.payload;
        },
        deleteUser:(state)=>{
            state.userInfo = null;
        },
        saveOrder:(state,action)=>{
            state.orderData = action.payload
        },
        resetOrder:(state)=>{
            state.orderData =[]
        },
    }
})

export const { 
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    resetCart,
    addUser,
    deleteUser,
    saveOrder,
    resetOrder
 } = shoppingSlice.actions;

export default shoppingSlice.reducer;