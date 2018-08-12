import TextField from '@material-ui/core/TextField'

import * as React from 'react'

import {BaseComponent} from './BaseComponent'

import { Customer, Item, Order, Shipment } from './order';

import { Product } from './product';


import { NavLink } from 'react-router-dom';


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

                console.log(x);
                this.product = x.results.data
                

                this.setState({"product" : this.product});

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

        const submission = new Order();
        const shipment = new Shipment(); 
        const orderCustomer = new Customer();
        const item = new Item();

        submission.shipments.push(shipment)
        submission.orderCustomer = orderCustomer;
        submission.items.push(item);

        item.quantity = this.product.quantityMinimum;
        item.itemFile = this.state.location;
        item.itemSequenceNumber = 1;
        item.productID = parseInt(this.id,10);
        console.log("RO " + item.productID)
        shipment.shipmentSequenceNumber = 1;

        orderCustomer.firstName = this.state["order-firstName"];  
        orderCustomer.lastName = this.state["order-lastName"];  
        orderCustomer.companyName = this.state["order-companyName"];  
        orderCustomer.address1 = this.state["order-address1"];  
        orderCustomer.address2 = this.state["order-address2"];  
        orderCustomer.city = this.state["order-city"];  
        orderCustomer.state = this.state["order-state"];  
        orderCustomer.postalCode = this.state["order-postalCode"];  
        orderCustomer.countryCode = "US" // this.state["order-countryCode"];  
        orderCustomer.email = this.state["order-email"];  
        orderCustomer.phone = this.state["order-phone"];

        shipment.firstName = this.state["shipping-firstName"];  
        shipment.lastName = this.state["shipping-lastName"];  
        shipment.companyName = this.state["shipping-companyName"];  
        shipment.address1 = this.state["shipping-address1"];  
        shipment.address2 = this.state["shipping-address2"];  
        shipment.city = this.state["shipping-city"];  
        shipment.state = this.state["shipping-state"];  
        shipment.postalCode = this.state["shipping-postalCode"];  
        shipment.countryCode = "US" // this.state["shipping-countryCode"];  
        shipment.phone = this.state["shipping-phone"];  
        shipment.shippingMethod = this.product.shippingMethodDefault // this.state["shipping-shippingMethod"];
        shipment.IMBSerialNumber = this.state["shipping-IMBSerialNumber"]

        console.log(submission);

        this.communication.createOrder(submission)
        .then((x:any)=>{
            const id = x.data.results.data.orderNumber;

            console.log(id);
            this.setState({orderId:id});
            this.forceUpdate();
        })
    }

    public render (){
        return (
            <div className="frame">
                <h2><span>Order Form</span> <span>{this.state.orderId}</span></h2>
                <h3>{this.product.name}</h3>
                <div>
                <form onSubmit={this.handleSubmit}>
                <div className="subSection singleColumn">
                <div><h3>Order Details</h3></div>
                <TextField required={true}
                     name="location"
                     label="Location: http://www.yourdomain.com/files/printReadyArtwork1.pdf"
                     defaultValue=""
                     margin="normal"
                     onChange={this.handleChange}  
                     className="largeTextField"   
                />

                </div>

                <div className="singleColumn">
                <div className="leftColumn subSection">
                <div><h3>Billing</h3></div>
                <TextField required={true}
                     name="order-firstName"
                     label="First Name"
                     defaultValue=""
                     margin="normal"
                     onChange={this.handleChange}       
                />
                 <TextField required={true}
                     name="order-lastName"
                     label="Last Name"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                <br/>
                <TextField required={true}
                     name="order-companyName"
                     label="Company Name"
                     defaultValue=""
                     margin="normal"  
                     onChange={this.handleChange}               
                />
                <br/>
                <TextField required={true}
                     name="order-address1"
                     label="Address Line 1"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                <br/>
                <TextField required={true}
                     name="order-address2"
                     label="Address Line 2"
                     defaultValue=""
                     margin="normal"   
                     onChange={this.handleChange}              
                />
                <br/>
                <TextField required={true}
                     name="order-city"
                     label="City"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />

           <TextField required={true}
                     name="order-state"
                     label="State"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />

            <TextField required={true}
                     name="order-postalCode"
                     label="Postal Code"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
            <br/>
            <TextField required={true}
                     name="order-email"
                     label="Email"
                     defaultValue=""
                     margin="normal"  
                     onChange={this.handleChange}   
                     className="email"            
                />
            <TextField required={true}
                     name="order-phone"
                     label="Phone Number"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                </div>



            <div className="rightColumn subSection">
            <div><h3>Shipping</h3></div>
                <TextField required={true}
                     name="shipping-firstName"
                     label="First Name"
                     defaultValue=""
                     margin="normal"
                     onChange={this.handleChange}       
                />
                 <TextField required={true}
                     name="shipping-lastName"
                     label="Last Name"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                <br/>
                <TextField required={true}
                     name="shipping-companyName"
                     label="Company Name"
                     defaultValue=""
                     margin="normal"  
                     onChange={this.handleChange}               
                />
                <br/>
                <TextField required={true}
                     name="shipping-address1"
                     label="Address Line 1"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                <br/>
                <TextField required={true}
                     name="shipping-address2"
                     label="Address Line 2"
                     defaultValue=""
                     margin="normal"   
                     onChange={this.handleChange}              
                />
                <br/>
                <TextField required={true}
                     name="shipping-city"
                     label="City"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />

            <TextField required={true}
                     name="shipping-state"
                     label="State"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />

            <TextField required={true}
                     name="shipping-postalCode"
                     label="Postal Code"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
            <br/>
            <TextField required={true}
                     name="shipping-email"
                     label="Email"
                     defaultValue=""
                     margin="normal"  
                     onChange={this.handleChange}   
                     className="email"            
                />
            
            <TextField required={true}
                     name="shipping-phone"
                     label="Phone Number"
                     defaultValue=""
                     margin="normal" 
                     onChange={this.handleChange}                
                />
                </div>
                
                </div>
                <div className="clear">
                    <div className="leftColumn">
                        <button type="submit" >Process Order</button>
                    </div>
                    <div className="rightColumn">
                        <NavLink to="/">Return to Products</NavLink>                    
                    </div>
                </div>
                </form>
                </div>
            </div>
        )
    }

}