import Customer from "./Customer";    // default
import { Payment } from "./Customer";  // non default 


function showDetails(customer:Customer,payment:Payment):void{

     console.log(customer);
     console.log(payment);

     }

let ram:Customer ={customerId:101,firstName:"ramesh"};

let pmt1:Payment = {txnId:201,description:"card pmt",amount:4500};

let naveen:string ='naveen';

showDetails(ram,pmt1);
