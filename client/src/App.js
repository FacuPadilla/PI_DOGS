import {Route, BrowserRouter} from "react-router-dom"
import LandingPage from "./views/landigPage/landingPage.component";
import './App.css';
import Home from "./views/Home/home.component"
import Detail from './views/Detail/Detail.component';
import Form from './views/Form/Form.component';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route   path="/home" component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/form" component={Form}/>
      <Route exact path="/" component={LandingPage}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
