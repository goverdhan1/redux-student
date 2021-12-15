import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { Student } from './students/student.component';
import { AddStudent } from './students/addstudent.component'
import { history } from './_helpers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <Route exact path='/' component={Student} />
                <Route exact path='/add-student' component={AddStudent} />
                <Route exact path='/edit-student/:id' component={AddStudent} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
