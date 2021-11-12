import { Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import './App.css';
import Login from './components/Login';
import Cashier from './components/Cashier';
import FormBio from './components/FormBio';

function App() {

  return (
    <div>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/cashier" component={Cashier} />
          <Route path="/bio-form" component={FormBio} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
