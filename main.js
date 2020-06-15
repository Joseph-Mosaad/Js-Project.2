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
//validation functions

function validateString(string){
    if(typeof string !=="string"){
        throw new Error(`${string} is not a valid name`)
    }
}

function validateNumber(number){
    if(typeof number !=="number"){
        throw new Error(`${number} is not a number`)
    }
}

function validateProduct(name="product",type="productType",quantity=0){
    validateString(name);
    validateString(type);
    validateNumber(quantity);
}


//JSON funtion for deep cloning 
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}



//getProducts
function getproducts(products){
    let productList=[...products];

    console.log(productList);

}
getproducts(products);







            //addNewProducts //how to print the updated list without third function

            function addNewProduct(productName,productType, ProductQuantity){
                let oldProducts=deepClone(products);
                validateProduct(productName,productType,ProductQuantity);
               
                oldProducts.push ({name:productName,type:productType, quantity:ProductQuantity});

                console.log(oldProducts);

            }

            addNewProduct("chocolate","bars", 120);





//updateQuantity

    function updateQuantity(productName,newQuantity){
        let newProducts=deepClone(products);
        
        validateProduct(productName,"",newQuantity);
               
        for(  i = 0; i < newProducts.length;  i++){

            if(newProducts[i].name===productName){
                newProducts[i].quantity = newQuantity;  
            }  
        }    

        console.log( newProducts)
      
    }

    updateQuantity("eggs",300);
