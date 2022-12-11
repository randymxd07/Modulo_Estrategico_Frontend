import restaurantApi from '@/core/services/api/restaurantApi.js';

// export const myAction = async ({ commit }) => {
    
// }

export const getProducts = async ({ commit }) => {
    
  await restaurantApi.get('products')
  .then(({data}) => {
    
    let products = [];

    data.data.forEach(element => {
      products.push({
        element,
        quantity: 1
      });
    });
    
    commit("setProducts", products);

  })
  .catch(({response}) => {
    console.error(response.data);
  })

}

export const getRecommendedProducts = async ({ commit }) => {
  
  await restaurantApi.get('products/recommended-products')
  .then(({data}) => {
    
    let products = [];

    data.data.forEach(element => {
      products.push({
        element,
        quantity: 1
      });
    });
    
    commit("setRecommendedProducts", products);

  })
  .catch(({response}) => {
    console.error(response.data);
  })

}