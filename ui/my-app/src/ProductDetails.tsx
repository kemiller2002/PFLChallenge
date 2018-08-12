import TextField from '@material-ui/core/TextField'

import * as React from 'react'

import {BaseComponent} from './BaseComponent'

import { Product } from './product';



export class ProductDetail extends BaseComponent {
    private id : string;
    private product : Product = new Product()

    constructor(props:any){
        super(props);
        this.id = this.props.id

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    public componentDidMount(){
        console.log(this.id)
        this.communication.gerProduct(this.id)
            .then(x=>{
                this.product = x.results.data
                this.forceUpdate();
            }
            )
        
    }

    public handleChange (e:React.ChangeEvent<HTMLInputElement>){
        const state = {}; 
        state[e.target.name] = e.target.value

        this.setState(state);
    }

    public handleSubmit (e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(this.state);
    }

    public render (){
        return (
            <div className="frame">
                <h2>Order Form</h2>
                <h3>{this.product.name}</h3>
                <div>
                <form onSubmit={this.handleSubmit}>
                
                <TextField 
                     name="orderFirstName"
                     label="First Name"
                     defaultValue=""
                     margin="normal"
                     onChange={this.handleChange}       
                />
                 <TextField 
                     name="orderLastName"
                     label="Last Name"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                <br/>
                <TextField 
                     name="orderCompany"
                     label="Company Name"
                     defaultValue=""
                     margin="normal"  
                     onChange={this.handleChange}               
                />
                <br/>
                <TextField 
                     name="orderAddress1"
                     label="Address Line 1"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                <br/>
                <TextField 
                     name="orderAddress2"
                     label="Address Line 2"
                     defaultValue=""
                     margin="normal"   
                     onChange={this.handleChange}              
                />
                <br/>
                <TextField 
                     name="orderCity"
                     label="City"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />

           <TextField 
                     name="orderState"
                     label="State"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />

            <TextField 
                     name="orderPostalCode"
                     label="Postal Code"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
            <br/>
            <TextField 
                     name="orderEmailAddress"
                     label="Email"
                     defaultValue=""
                     margin="normal"  
                     onChange={this.handleChange}               
                />
            <TextField 
                     name="orderPhoneNumber"
                     label="Phone Number"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                <br/>
                <button type="submit">Process Order</button>
                </form>
                </div>
            </div>
        )
    }

}