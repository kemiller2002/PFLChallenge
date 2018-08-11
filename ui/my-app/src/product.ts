
export class DeliveredPrice {
    public deliveryMethodCode : string;
    public description : string;
    public price : number;
    public country : string;
    public countryCode : string;
    public created : Date;
    public locationType : string;
    public isDefault : true
}

export class ProductionSpeed {
    public days : number;
    public isDefault : boolean;
}

export class Product {
    public id : number;
    public sku : string;
    public productID : number;
    public name : string;
    public description : string;
    public imageURL : string;
    public images : Image[];
    public quantityDefault : number;
    public quantityMinimum : number;
    public quantityMaximum : number;
    public quantityIncrement : number;
    public shippingMethodDefault : string;
    public hasTemplate : boolean;
    public emailTemplateId : number;
    public lastUpdated : Date;
    public customValues : any[];
    public deliveredPrices : DeliveredPrice[];
    public productionSpeeds : ProductionSpeed[];
    public productFormat : string;
    public productRestrictionType : string; 
}

export class Result {
    public errors : any[];
    public messages : any[];
    public data : Product[]
}

export class Response {
    public meta : any; 
    public results : Result;
}

 export class Image {}