import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import './App.css';
import Login from './components/Login';
import Menu from './components/Menu';
import DashboardBuku from './components/DashboardBuku';
import DashboardUser from './components/DashboardUser';

function App() {

  return (
    <div>
      <Container maxWidth="lg">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/dashboard-buku" component={DashboardBuku} />
          <Route path="/dashboard-user" component={DashboardUser} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
