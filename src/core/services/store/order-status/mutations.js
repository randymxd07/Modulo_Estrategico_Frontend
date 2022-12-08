// export const myAction = ( state ) => {

// }

export const setOrderStatus = ( state, status ) => {

    state.orderStatus = status;

    localStorage.setItem('orderStatus', state.orderStatus);

}