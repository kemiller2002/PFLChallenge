import axios from 'axios';
import { Order } from './order';
import * as Products from './product'


export class CommunicationOptions {
    public url:string
}

export class Communication {
    private url:string;

    constructor(options:CommunicationOptions)
    {
        this.url = options.url;
    }

    public getProducts () {
        return axios.get(`${this.url}products`)
        .then(x=>x.data as Products.Response)
    }

    public gerProduct(id:string){
        return axios.get(`${this.url}products/${id}`)
        .then(x=>{
            console.log(x);
           return x.data as Products.SingleResponse
        }
        )
    }

    public createOrder (order:Order){

        const item = { "partnerOrderReference": "MyReferenceNumber", "orderCustomer": { "firstName": "John", "lastName": "Doe", "companyName": "ACME", "address1": "1 cme Way", "address2": "", "city": "Livingston", "state": "MT", "postalCode": "59047", "countryCode": "US", "email": "jdoe@acme.com", "phone": "1234567890" }, "items": [ { "itemSequenceNumber": 1, "productID": 9876, "quantity": 1000, "itemFile": "http://www.yourdomain.com/files/printReadyArtwork1.pdf" } ], "shipments": [ { "shipmentSequenceNumber": 1, "firstName": "John", "lastName": "Doe", "companyName": "ACME", "address1": "1 Acme Way", "address2": "", "city": "Livingston", "state": "MT", "postalCode": "59047", "countryCode": "US", "phone": "1234567890", "shippingMethod": "FDXG" } ] };
        
        console.log(item);

        return axios.post(`${this.url}orders`, order)
        .then(x=>console.log(x))
    }

}