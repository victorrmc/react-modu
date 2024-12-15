import { useState } from 'react';
import './Filters.css'
export function Filters({changeFilters}) {
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('all')

  // Cambiar el valor del precio
  const handleChangePrice = (event) => {
    const newPrice = event.target.value
    setPrice(newPrice)
    changeFilters(prevState => ({
        ...prevState, priceMin: newPrice
    }))
  }
  // Cambiar el valor de la categoria
  const handleChangeCategory = (event) => {
    const newCategory = event.target.value
    setCategory(newCategory)
    changeFilters(prevState => ({
        ...prevState, category: newCategory
    }))
  }

  return (
    <div className="filters">
      <label htmlFor="price">Price</label>
      <input onChange={handleChangePrice} id="priceMin" type="range" min="0" step="10" max="2000" />
      <span>{price}</span>
      <label htmlFor="category">Categoria</label> 
      <select onChange={handleChangeCategory} name="categories" id="" defaultValue={"all"}>
        <option value="all"></option>
        <option value="laptops">Portatil</option>
        <option value="smartphones">Movil</option>
      </select>
    </div>
  );

}
