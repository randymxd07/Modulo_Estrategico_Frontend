// export const myAction = ( state ) => {

// }

export const setProducts = ( state, products ) => {

    console.log(products);

    state.products = [];
    
    products.forEach(element => {
        state.products.push(element);
    });

}
