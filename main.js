let carts = document.querySelectorAll('.add-cart');

let products = [

    {
        name: 'KCN DOG TSHIRT WHITE',
        tag: 'DOG1',
        price: 30,
        inCart: 0,
},

    {
    name: 'KCN DOG TSHIRT BLUE',
    tag: 'DOG2',
    price: 30,
    inCart: 0,
},

    {
    name: 'KCN CCTV TSHIRT RED',
    tag: 'CCTV1',
    price: 30,
    inCart: 0,
},

    {
    name: 'KCN CCTV TSHIRT BLACK',
    tag: 'CCTV2',
    price: 30,
    inCart: 0,
},


    {
    name: 'KCN PIDGEON TSHIRT BLACK',
    tag: 'PIDGEON1',
    price: 30,
    inCart: 0,
},

    {
    name: 'KCN PIDGEON TSHIRT WHITE',
    tag: 'PIDGEON2',
    price: 30,
    inCart: 0,
},

    {
    name: 'KCN JOINT TSHIRT BLACK',
    tag: 'JOINT1',
    price: 30,
    inCart: 0,
},

    {
    name: 'KCN JOINT TSHIRT BLACK',
    tag: 'JOINT2',
    price: 30,
    inCart: 0,
},

    {
    name: 'KCN BOXLOGO TSHIRT WHITE',
    tag: 'BOXLOGO1',
    price: 30,
    inCart: 0,
},

    {
    name: 'KCN BOXLOGO TSHIRT BLACK',
    tag: 'BOXLOGO2',
    price: 30,
    inCart: 0,
},



    {
    name: 'KCN THROWIE TSHIRT BLACK',
    tag: 'THROWIE1',
    price: 30,
    inCart: 0,
},


    {
    name: 'KCN THROWIE TSHIRT WHITE',
    tag: 'THROWIE2',
    price: 30,
    inCart: 0,
},


    {
    name: 'KCN PHOTO TSHIRT1 BLACK',
    tag: 'PHOTOBLACK1',
    price: 30,
    inCart: 0,
},


    {
    name: 'KCN PHOTO TSHIRT1 WHITE',
    tag: 'PHOTOWHITE1',
    price: 30,
    inCart: 0,
},

{
    name: 'KCN PHOTO TSHIRT2 BLACK',
    tag: 'PHOTOBLACK2',
    price: 30,
    inCart: 0,
},


    {
    name: 'KCN PHOTO TSHIRT2 WHITE',
    tag: 'PHOTOWHITE2',
    price: 30,
    inCart: 0,
},

{
    name: 'KCN PHOTO TSHIRT3 BLACK',
    tag: 'PHOTOBLACK3',
    price: 30,
    inCart: 0,
},


    {
    name: 'KCN PHOTO TSHIRT3 WHITE',
    tag: 'PHOTOWHITE3',
    price: 30,
    inCart: 0,
}

];


for (let i = 0; i < carts.length; i++) {

    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}


function onLoadCartNumbers(){
    
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem ('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }

    setItems(product);

}

function setItems(product) {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {


    if(cartItems[product.tag] == undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
    cartItems[product.tag].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
    }
} 
   
    localStorage.setItem ("productsInCart", JSON.stringify
    (cartItems));
}


onLoadCartNumbers();
