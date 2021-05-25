import { Route, Switch, HashRouter } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
