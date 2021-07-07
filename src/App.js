import './App.css';
import React , {Component} from 'react';
import Sidebar from './components/sidebar/sidebar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Accueil from './components/section/accueil';
import Contact from './components/section/contact/contact';
import Project from './components/section/project/project';
import { Provider } from 'react-redux';
import store from './components/redux/store/store'

class App extends Component {

  render(){

      return (
      
        <Router>
          <Provider store={store}  >
        <div className="App">
          <Sidebar />



          <div className="wrapper">

            <Switch>
              <Route exact={true} path="/" component={Accueil}  />
              <Route exact path="/project/:slug"  component={Project} />
              <Route exact path="/contact" component={Contact}  />
            </Switch>

          </div>

            </div>
            </Provider>
      </Router>
    );

  }

}

export default App;
