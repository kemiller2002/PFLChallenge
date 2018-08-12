import * as React from 'react'
import { NavLink } from 'react-router-dom';

import {BaseComponent} from './BaseComponent'



export class OrderStatus extends BaseComponent{

    private id : string
    constructor(props:any) {
        super(props)

        this.id = props.id
    }

    public render () {
        return (
            <div>
                <h3>Order Status</h3>
                <h4>{this.id}</h4>
            

                <div><NavLink to="/">Back To Products</NavLink></div>
            </div>
        ) 

    }


}

