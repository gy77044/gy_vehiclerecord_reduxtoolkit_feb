import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {removeCar} from "../store"
const CarList = () => {
  const dispatch = useDispatch()
  const cars = useSelector((state)=>{
    return state.cars.carData
  })
 
  const renderedCars = cars.map((car)=>{
    return (<div key={car.id} className="panel">
      <p>
        {car.name} - ${car.cost}
      </p>
      <button className='button is-danger' onClick={()=>{handleCarDelete(car)}}>Delete</button>
    </div>)
  })
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))  
  }
  return (
    <div>
      {renderedCars}
    </div>
  )
}

export default CarList