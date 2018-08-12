import * as React from 'react';
import './App.css';


import {ProductComponent} from './Products'

import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Communication, CommunicationOptions } from './Communication';
import { ProductDetail } from './ProductDetails';


class App extends React.Component {

  
  public render() {
    const options = new CommunicationOptions();
    options.url = 'http://localhost:5000/'

    const communication = new Communication(options)
    
    const renderProduct =  (props:any) => {
        return <ProductDetail communication = {communication} id={props.match.params.id} />
    }

    return (
      <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact={true}>
                            <ProductComponent communication = {communication} />
                        </Route>

                        <Route path="/:id" render={renderProduct}/> 
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
