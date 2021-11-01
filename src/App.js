
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Homes from './Component/Homes/Homes';
import Schedule from './Component/Schedule/Schedule';
import AboutUs from './Component/AboutUs/AboutUs';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login';

import AuthProvider from './Context/AuthProvider';
import PrivadeRoude from './Component/PrivadeRoude/PrivadeRoude';
import OrderPlace from './Component/OrderPlace/OrderPlace';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Homes></Homes>
        </Route>
        <Route path="/homes">
          <Homes></Homes>
        </Route>
        <Route path="/schedule">
          <Schedule></Schedule>
        </Route>
        <Route path="/aboutUs">
        <AboutUs></AboutUs>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivadeRoude path="/orderPlace/:id">
          <OrderPlace></OrderPlace>
        </PrivadeRoude>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;



  
  
  
   





