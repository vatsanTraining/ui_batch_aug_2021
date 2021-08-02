"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showDetails(customer, payment) {
    console.log(customer);
    console.log(payment);
}
var ram = { customerId: 101, firstName: "ramesh" };
var pmt1 = { txnId: 201, description: "card pmt", amount: 4500 };
var naveen = 'naveen';
showDetails(ram, pmt1);
