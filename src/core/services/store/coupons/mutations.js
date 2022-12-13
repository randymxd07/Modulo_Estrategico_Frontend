// export const myAction = ( state ) => {

// }

export const setInactiveCoupons = ( state, coupons ) => {

    coupons.forEach(element => {

        state.inactiveCoupons.push(element);
        
    });

}
