import * as React from 'react'

import {BaseComponent} from './BaseComponent'
import { Product } from './product';

export class ProductDetail extends BaseComponent {
    private id : string;
    private product : Product = new Product()

    constructor(props:any){
        super(props);
        this.id = this.props.id
    }

    public componentDidMount(){
        console.log(this.id)
        this.communication.gerProduct(this.id)
            .then(x=>this.product = x.result.data)
    }

    public render (){
        return (
            <div>
                <h2>Order Form</h2>
                <h3>{this.product.name}</h3>
            </div>
        )
    }

}