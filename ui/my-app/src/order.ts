export class Customer {
        public firstName:string;  
        public lastName:string;  
        public companyName:string;  
        public address1: string;  
        public address2:string;  
        public city:string;  
        public state:string;  
        public postalCode:string;  
        public countryCode:string;  
        public email:string;  
        public phone:string 

}
export class Item {
        public itemSequenceNumber: number;  
        public productID: number;  
        public quantity: number;  
        public productionDays: number;                    
        public partnerItemReference:string;
        public itemFile:string  
}

export class BillingVariable {
    public key:string;
    public value:string
}

export class Shipment{
    public shipmentSequenceNumber: number;  
    public firstName:string;  
    public lastName:string;  
    public companyName:string;  
    public address1: string;  
    public address2:string;  
    public city:string;  
    public state:string;  
    public postalCode:string;  
    public countryCode:string;  
    public phone:string;  
    public shippingMethod:string;
    public IMBSerialNumber:string
}

export class Payment{
    public paymentMethod:string;
    public paymentID:string;
    public paymentAmount: number
}

export class ItemShipment {
    public itemSequenceNumber: number;
    public shipmentSequenceNumber:number
}

export class Order {
    public partnerOrderReference:string;
    public orderCustomer: Customer; 
    public items: Item[];  
    public shipments: Shipment[]

    public payments:Payment[];
    public itemShipments:ItemShipment[];

    /*webhooks:[
        {
            public type:string;
            public callbackUri:string;
            public callbackHeaders: {
                "header_field_sample1": "header_value_sample1";
                "header_field_sample2": "header_value_sample2"
            }
        }
    ];*/

    public billingVariables:BillingVariable[]
}