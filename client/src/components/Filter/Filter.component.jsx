import "./Filter.styles.css"
import { orderDogs, filterOrigin } from "../../redux/actions"
import { useDispatch } from "react-redux"

const Filter = ()=> {
const dispatch = useDispatch();

const handleOrder = (event)=> {
    dispatch(orderDogs(event.target.value))
}

const handleOrigin = (event)=> {
    dispatch(filterOrigin(event.target.value))
}




    return (
        <div className="contFilt">
    <div className="filters1">
        <label htmlFor="orderSelect">Ordenar alfabeticamente:</label>
        <select className="selectcss" id="orderSelect" onChange={handleOrder}>
          <option value="A"> A-Z</option>
          <option value="B"> Z-A</option>
       </select>
    </div>
    <div className="filters2">
        <label htmlFor="WorderSelect">Ordenar por peso:</label>
        <select className="selectcss" id="WorderSelect" onChange={handleOrder}>
          <option value="C"> Mas pesados</option>
          <option value="D"> Menos pesados</option>
       </select>
    </div>
    <div className="filters3">
        <label htmlFor="origen">Origen:</label>
        <select className="selectcss" id="origen" onChange={handleOrigin}>
        <option value="all"> todos</option>
          <option value="api"> api</option>
          <option value="bdd"> bdd</option>
       </select>
    </div>
    <div className="filters4">
        <label htmlFor="temps">Temperamentos:</label>
        <select className="selectcss" id="temps" onChange={handleOrder}>
          <option> Todos</option>
          <option> malos</option>
       </select>
    </div>
    </div>
        
    )

}

export default Filter