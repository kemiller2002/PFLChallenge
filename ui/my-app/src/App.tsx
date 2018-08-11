import * as React from 'react';
import './App.css';


import {ProductComponent} from './Products'

import { BrowserRouter, Route, Switch} from "react-router-dom";


class App extends React.Component {

  public render() {
    

    return (
      <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact={true}>
                            <ProductComponent/>
                        </Route>

                        <Route render={this.pathDoesNotExist} />
                    </Switch>
                </div>
            </BrowserRouter>

    );

  }
  
  private pathDoesNotExist (props:any) {
    return <div className="spacerTop alert alert-danger">
    Sorry, the resource you requested ({props.location.pathname}) does not exist.
  </div>
  }
}

export default App;
