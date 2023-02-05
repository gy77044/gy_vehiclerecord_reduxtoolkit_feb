import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name:'cars',
  initialState:{
    searchTerm:'',
    carData:[]
  },
  reducers:{
    changeSearchTerm(state, action){
      state.searchTerm = action.payload;
    },
    addCar(state, action){
      
     state.carData.push({
      name:action.payload.name,
      cost: action.payload.cost,
      id:nanoid,
     })  
    },
    removeCar(state,action){
      const updated =  state.carData.filter((car)=>{
        return (car.id!==action.payload)
      })
      state.carData = updated;
    }
  }
})

export const {addCar,removeCar, changeSearchTerm}=carsSlice.actions
export const carsReducer = carsSlice.reducer;
