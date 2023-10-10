import "./Cards.styles.css"
import Card from "../Card/Card.component"
import { useSelector } from "react-redux"
import { useState } from "react"


const Cards = () => {

  const dog= useSelector(state=> state.allDogs);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8; // Número de perros por página

  // Calcular el índice de inicio y fin para la página actual
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage;

  // Obtener los perros para la página actual
  const dogsToShow = dog.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <div>
    <div className="card-List">
     {dogsToShow.map(dog=>{
      console.log(dog)
      return <Card
      id={dog.id}
      name={dog.name}
      height={dog.height}
      image={dog.image}
      life_span= {dog.life_span}
      weight = {dog.weight}
      temperament={dog.temperament}
      
      />
     })}
     
    </div>
    <p>Estas en la pagina {currentPage}</p>
    <div className="paginado">
        {/* Botón para la página anterior */}
        <button
          
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          PREV
        </button>

        {/* Botones de páginas */}
        {Array.from({ length: Math.ceil(dog.length / perPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className="botones"
          >
            {index + 1}
          </button>
        ))}

        {/* Botón para la página siguiente */}
        <button
        
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(dog.length / perPage)}
        >
          NEXT
        </button>
        
      </div>
    </div>
    
  );
}

export default Cards;