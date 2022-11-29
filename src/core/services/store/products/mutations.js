// export const myAction = ( state ) => {

// }

export const setProducts = ( state, products ) => {

    state.products = [];
    
    products.forEach(element => {
        state.products.push(element);
    });

}
