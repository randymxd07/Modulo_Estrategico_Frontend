import restaurantApi from '@/core/services/api/restaurantApi.js';

// export const myAction = async ({ commit }) => {
    
// }

export const getProducts = async ({ commit }) => {
    
    await restaurantApi.get('products')
    .then(({data}) => {
      commit("setProducts", data.data);
    })
    .catch(({response}) => {
      console.error(response.data)
      if(response.data.status == 401){
        localStorage.clear();
        this.$router.go();
      }
    })

}
