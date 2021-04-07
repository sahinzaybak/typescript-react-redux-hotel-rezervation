import {Route, Switch} from 'react-router-dom';
import rezervationPage from './pages/rezervation'

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
