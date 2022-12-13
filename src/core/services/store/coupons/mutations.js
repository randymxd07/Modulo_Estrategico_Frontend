// export const myAction = ( state ) => {

// }

export const setInactiveCoupons = ( state, coupons ) => {

    state.inactiveCoupons = [];

    coupons.forEach(element => {

        state.inactiveCoupons.push(element);
        
    });

}

export const setActiveCoupons = ( state, coupons ) => {

    state.activeCoupons = [];

    coupons.forEach(element => {

        state.activeCoupons.push(element);
        
    });

}
