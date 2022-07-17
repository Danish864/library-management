import "./App.css";
import Homepagee from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import createPersistedState from "use-persisted-state";
import Allbooks from "./components/homepage/Sidebar/Allbooks";
import AddBook from "./components/homepage/Sidebar/AddBook";
import Issue from "./components/homepage/Sidebar/Issue";
const useUserState = createPersistedState("user");

function App() {
  const [user, setLoginUser] = useUserState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            {user && user._id ? (
              <Homepagee setLoginUser={setLoginUser} user={user.name} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/login">
            {user && user._id ? (
              <Homepagee setLoginUser={setLoginUser} user={user.name} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/register">
            {user && user._id ? (
              <Homepagee setLoginUser={setLoginUser} user={user.name} />
            ) : (
              <Register />
            )}
          </Route>
          <Route path="/allbooks">
            {user && user._id ? (
              <Allbooks setLoginUser={setLoginUser} user={user} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/addbook">
            {user && user._id ? (
              <AddBook setLoginUser={setLoginUser} user={user.name} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/issue">
            {user && user._id ? (
              <Issue setLoginUser={setLoginUser} user={user} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>

          <Route path="">
            {user && user._id ? (
              <Homepagee setLoginUser={setLoginUser} user={user.name} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
