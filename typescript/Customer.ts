export default interface Customer{

    customerId:number;firstName:string;email?:string;
}


export interface Payment{

    txnId:number;description:string;amount:number;
}