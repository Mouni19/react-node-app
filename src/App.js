import React from 'react';
import {BrowserRouter , Redirect, Route, Switch} from "react-router-dom";
import Login from './screen/login/login';
import Compte from './screen/compte/compte';
import EditerModule from './screen/editModule/editModule';
import ChoisirCour from './screen/choixducour/choixducour';

const App = ()=>{
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Redirect to="/login"/>
            </Route>
           <Route path={'/login'} component={Login}/>
           <Route path={'/compte'} component={Compte}/>
           <Route path={'/editModule'} component={EditerModule}/>
          <Route path={'/choixducour'} component={ChoisirCour}/>
        </Switch>
      </BrowserRouter>
    );
}
    
export default App;
