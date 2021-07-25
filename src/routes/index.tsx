// Core
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

// Components
import CharacterList from '../containers/CharacterList'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Redirect path="*" to="/404" exact={true} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
