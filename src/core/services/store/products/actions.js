import restaurantApi from '@/core/services/api/restaurantApi.js';

// export const myAction = async ({ commit }) => {
    
// }

export const getProducts = async ({ commit }) => {
    
    await restaurantApi.get('products')
    .then(({data}) => {
      
      let products = [];
      let json;

      data.data.forEach(element => {
        json = {
          element,
          quantity: 1
        }
        products.push(json);
      });
      
      commit("setProducts", products);

    })
    .catch(({response}) => {
      console.error(response.data)
      if(response.data.status == 401){
        localStorage.clear();
        this.$router.go();
      }
    })

}
