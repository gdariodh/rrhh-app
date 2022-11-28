import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/userlist">
          <UserList />
        </Route>

        <Route path="/user/:id">
          <User />
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
