// export const myAction = ( state ) => {

// }

export const setProducts = ( state, products ) => {

    state.products = [];
    
    products.forEach(element => {
        state.products.push(element);
    });

}

export const setProductsToCart = ( state, product ) => {

    if(state.cart.length != 0) {

        let productExists = false;
        
        state.cart.forEach(ele => {
            if(product.id == ele.id){
                productExists = true;
            }
        });
        
        if(!productExists) {
            state.cart.push(product);
        }
        
    } else {
        
        state.cart.push(product);

    }

    setLocalStorageCartProducts(product);

}

export const setLocalStorageCartProducts = ( product ) => {

    let localCart = [];

    const items = JSON.parse(localStorage.getItem('cart'));

    if(items){

        let productExists = false;

        items.forEach(ele => {

            if(product.id == ele.id){

                productExists = true;

            } else {

                productExists = false;

                localCart.push(ele);

            }
            
        });
        
        if(!productExists) {

            localCart.push(product);
        
            localStorage.setItem('cart', JSON.stringify(localCart));

        }

    } else {

        localCart.push(product);
        
        localStorage.setItem('cart', JSON.stringify(localCart));

    }

}

export const getLocalStorageCartProducts = ( state, products ) => {

    products.forEach(ele => {

        state.cart.push(ele);
        
    })

}