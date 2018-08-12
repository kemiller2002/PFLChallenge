import './App.css';

import {BaseComponent} from './BaseComponent'
import * as Products from './product'

import * as React from 'react';
import { NavLink } from 'react-router-dom';


// import { Router } from 'react-router-dom';

export class ProductComponent extends BaseComponent {
    constructor(props:Readonly<{}>){
        super(props)
    }
    
      public componentDidMount(){
        this.communication.getProducts()
            .then(x=>{
                const d:Products.Response = x
                const products : Products.Product[] = d.results.data.sort((a,b) => a.name.localeCompare(b.name)) 
                this.setState({products});
              }
        );
      }

    public render () {
        const products : Products.Product[] = ((this.state || {products : []}) as any).products

        return (
            <table>
          <thead>
              <tr>
                <th>Product</th>
              </tr>
          </thead>
          
          <tbody className="tableBody">
            {products.map(p => {
               return <tr key={p.productID}>
                    <td><NavLink to={p.productID.toString()}>{p.name}</NavLink></td>
                </tr>
            })
          }
          </tbody>
          
        </table>
        ) 
    }

    
}