import {Route, Switch} from 'react-router-dom';
import rezervationPage from './pages/rezervation'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/style.scss'

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path='/' component={rezervationPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
