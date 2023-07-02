///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


const summedPrice = cart.reduce((acc,curr)=> acc + curr.price, 0)
console.log(`The sum of all the food : $${summedPrice}`)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return (cartTotal- couponValue) + (cartTotal*tax) 
}
let total = calcFinalPrice(50, 5, 0.06)
console.log(`The final price : ${total}`)


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
*/
console.log(`The properties in cart page that should have : 
  1. customer's id : number type : It is primary key to keep tracct on each customer.
  2. items : string type : a name of product that customer is goin to order.
  3. price : number type : it will  be use in a function to calculate total price for each item,  sub total, final total after tax and after coupon apply.
  4. quatity : number type : it will be used in a function later.
  `)
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customers = {
    customerId: 1 ,
    items: 'Chicken Fried Rice',
    price: 18,
    quantity: 1
}
 console.log(customers)