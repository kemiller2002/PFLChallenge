import * as React from 'react';
import './App.css';


import {ProductComponent} from './Products'

import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Communication, CommunicationOptions } from './Communication';
import { OrderStatus } from './OrderStatus';
import { ProductDetail } from './ProductDetails';



class App extends React.Component {

  
  public render() {
    const options = new CommunicationOptions();
    // options.url = 'http://localhost:5000/'
    options.url = 'https://pfl.azurewebsites.net/'
    // options.url = 'http://localhost:49745/'
    const communication = new Communication(options)
    
    const renderProduct =  (props:any) => {
        return <ProductDetail communication = {communication} id={props.match.params.id} />
    }

    const renderOrderStatus =  (props:any) => {
        return <OrderStatus communication = {communication} id={props.match.params.id} />
    }

    return (
      <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact={true}>
                            <ProductComponent communication = {communication} />
                        </Route>

                        <Route path="/:id" render={renderProduct}/> 
                        <Route path="/order/:id" render={renderOrderStatus}/> 

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
