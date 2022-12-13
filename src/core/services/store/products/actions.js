import restaurantApi from '@/core/services/api/restaurantApi.js';

// export const myAction = async ({ commit }) => {
    
// }

export const getProducts = async ({ commit }) => {
    
  await restaurantApi.get('products')
  .then(({data}) => {
    
    let products = [];

    data.data.forEach(element => {

      if(element.discount != null){
        element.price = element.price - ((+element.discount / 100) * +element.price)
      }

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

      if(element.discount != null){
        element.price = element.price - ((+element.discount / 100) * +element.price)
      }

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