import * as React from 'react';
import './App.css';

import axios from 'axios';

import * as Products from './product'


export class ProductComponent extends React.Component {
    constructor(props:Readonly<{}>){
        super(props)
    }

    public getProducts () {
        return axios.get('http://localhost:5000/products')
          .then(x=>{
            const d:Products.Response = x.data
            const products : Products.Product[] = d.results.data.sort((a,b) => a.name.localeCompare(b.name)) 
            this.setState({products});
          }
        )
      }
    
      public componentDidMount(){
        this.getProducts();
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
            return <tr key={p.id}>
              <td>{p.name}</td>
            </tr>
            })
          }
          </tbody>
          
        </table>
        ) 
    }
}