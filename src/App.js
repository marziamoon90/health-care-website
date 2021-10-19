import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/About/About';
import Login from './pages/Login/Login/Login';
import Therapy from './pages/Home//Therapies/Therapy/Therapy';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ minHeight: "95vh" }}>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/therapy">
              <Therapy></Therapy>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="register">
              <Registration></Registration>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
