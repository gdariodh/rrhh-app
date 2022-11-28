import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import User from "./User";
import UserList from "./UserList";

function Navigation() {
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

export default Navigation;
