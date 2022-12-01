// export const myAction = ( state ) => {

// }

export const setProducts = ( state, products ) => {

    state.products = [];
    
    products.forEach(element => {
        state.products.push(element);
    });

}

export const setProductsToCart = ( state, product ) => {

    state.cart.push(product);

    let localCart = [];

    const items = JSON.parse(localStorage.getItem('cart'));

    if(!items){

        localCart.push(product);
        
        localStorage.setItem('cart', JSON.stringify(localCart));

    } else {

        items.forEach(element => {
            localCart.push(element);
        });

        localCart.push(product);
        
        localStorage.setItem('cart', JSON.stringify(localCart));

    }

    console.log(localCart);

}

export const getLocalStorageCartProducts = ( state, products ) => {

    products.forEach(ele => {

        state.cart.push(ele);
        
    })

}