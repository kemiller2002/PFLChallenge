import axios from 'axios';
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
        return axios.get(`${this.url}products`)// ('http://localhost:5000/products')
        .then(x=>x.data as Products.Response)
    }

    public gerProduct(id:string){
        return axios.get(`${this.url}products/${id}`)// ('http://localhost:5000/products')
        .then(x=>x.data as Products.SingleResponse)
    }

}