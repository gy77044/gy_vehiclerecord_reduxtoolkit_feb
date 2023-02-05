import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCar, changeCost, changeName } from '../store'

const CarForm = () => {
  const dispatch = useDispatch()  
  const {name, cost} = useSelector((state)=>{
    return({
      name:state.form.name,
      cost:state.form.cost
    })
  }) 
  
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))
  }
  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value)||0;
    dispatch(changeCost(carCost))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addCar({name:name, cost:cost}))
  }
  return (
    <div className='car-form panel'>
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit} >
        <div className="field-group">
          <div className="field">
            <label htmlFor="" className="label">Name</label>
            <input type="text" className="input is-expanded" value={name} onChange={handleNameChange} />
          </div>
          <div className="field">
            <label htmlFor="" className="label">Cost</label>
            <input type="number" className="input is-expanded" value={cost || ""} onChange={handleCostChange} />
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm