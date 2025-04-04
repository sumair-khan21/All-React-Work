import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
          allProducts: [],
}

const productSlice = createSlice({
          name : "products",
          initialState,
         reducers:{},
         extraReducers: (builder) =>{
          builder.addCase(fetchProduct.pending, (state, payload)=>{
                    state.isloading = true;
                    console.log("pending");
          } );
          builder.addCase(fetchProduct.fulfilled, (state, payload)=>{
                    state.isloading = true;
                    state.allProducts = action.payload;
                    console.log("fulfilled");
          } );
          builder.addCase(fetchProduct.rejected, (state, payload)=>{
                    state.isloading = true;
                    state.allProducts = [];
                    state.error = true;
                    console.log("rejected");
          } );
         }
})

export const fetchProduct = createAsyncThunk("product/fetch", async()=>{
          try {
                    const data = await axios.get("https://fakestoreapi.com/products");
                    console.log("data.data", data.data)
                    return data.data
                    } catch (error) {
                              console.log(error, "error");
                    }
}

)