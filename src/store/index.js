import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlices";

const store = configureStore({
  reducer:{
    cars:carsReducer,
    form:formReducer
  }
})