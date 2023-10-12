import "./NavBar.styles.css"
import Filter from "../Filter/Filter.component"
import SearchBar from "../SearchBar/SearchBar.component";

function NavBar() {
    return (
      <div className="container">
        <div>
          
        <SearchBar/>
        
        </div>
        <Filter></Filter>
        
    
        </div>
       
       
       

      
    );
  }
  
  export default NavBar;