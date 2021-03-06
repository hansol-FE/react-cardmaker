import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';

import styles from './app.module.css';

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker" >
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
