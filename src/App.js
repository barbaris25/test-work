import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import AddUser from "./pages/AddUser";
import User from "./pages/User";

import './scss/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <div className="app">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/add" component={AddUser}></Route>
            <Route path="/user/:id" component={User}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
