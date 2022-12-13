import restaurantApi from "@/core/services/api/restaurantApi.js";

// export const myAction = async ({ commit }) => {
    
// }

export const getInactiveCoupons = async ({ commit }) => {
    
    await restaurantApi.get('coupons/getInactiveCoupons')
    .then(({data}) => {
        commit('setInactiveCoupons', data.data);
    })
    .catch(({response}) => {
        console.error(response.data);
    })

}