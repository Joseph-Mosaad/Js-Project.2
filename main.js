let products =[
    {
        name: "pepsi",
        type: "Unit",
        quantity: 100
    },
    
    {
        name: "cola",
        type: "unit",
        quantity: 120
    
    },

    {
        name: "tomato",
        type: "kilo",
        quantity: 120
    
    },
    {
        name: "cucumber",
        type: "kilo",
        quantity: 120
    
    },
    {
        name: "eggs",
        type: "unit",
        quantity: 1000
    
    },
    {
        name: "cheese",
        type: "unit",
        quantity: 120
    
    },
    {
        name: "kiwi",
        type: "kilo",
        quantity: 120
    
    },

]



//Validation functions

function validate(string,type,quantity){
    if(typeof string !=="string"){
        throw new Error(`${string} is not a valid name!`);}

        else if(typeof type !=="string"){
            throw new Error(`${type} is not a valid type!`);}

    else if(typeof quantity !=="number"){
        throw new Error(`${quantity} is not a number!`);
    }
}





//getProducts function

function getproducts(products){
    let productList=[...products];
    
    console.log(productList);

}
getproducts(products);








            //addNewProducts //how to print the updated list without third function

            function addNewProduct(productName,productType, ProductQuantity){

                validate(productName,productType, ProductQuantity);


                products.push ({name:productName,type:productType, quantity:ProductQuantity});
                
                console.log(products);
                
            }

            addNewProduct("chocolate","bars", 120);




            
//updateQuantity

    function updateQuantity(productName,productType,newQuantity){
       
        validate(productName,productType,newQuantity);
        
        for(  i = 0; i < products.length;  i++){

            if(products[i].name===productName){
                products[i].quantity = newQuantity;  
            }  
        }    
      
        console.log( products)
        return;
    }

    updateQuantity("eggs","unit",300);
    
    