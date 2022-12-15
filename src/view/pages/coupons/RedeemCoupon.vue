<template>

  <main>

    <h1 class="mb-10">Canjear Cupon</h1>

    <section class="row">

      <!-- COLUMN TO FILL -->
      <div class="col-sm-4"></div>

      <div class="col-sm-12 col-md-4 text-center">

        <!-- TITLE -->
        <h3 class="my-5">Cupón:</h3>

        <form @submit.prevent.stop="onSubmit">

          <b-form-group 
            id="input-group-2" 
            label-for="coupon_id"
          >
            <b-form-input
              style="font-size: 18px"
              class="text-center"
              size="lg"
              id="coupon_id"
              v-model="coupon_id"
              placeholder="57E78719-51C7-4E58-A72E-5ECEAFE39B25"
            ></b-form-input>
          </b-form-group>

          <!-- BUTTON -->
          <b-button type="submit" variant="primary" size="lg" class="col-sm-12">
            <i class="fas fa-plus"></i> Agregar Cupón
          </b-button>

        </form>

      </div>

      <!-- COLUMN TO FILL -->
      <div class="col-sm-4"></div>

    </section>

  </main>

</template>

<script>

import restaurantApi from '@/core/services/api/restaurantApi.js';

export default {

  data(){
    return{
      coupon_id: '',
    }
  },

  methods: {

    async onSubmit(){

      if(this.coupon_id != ''){

        await restaurantApi.put('coupons/activateCoupon', {coupon_id: this.coupon_id})
        .then(({data}) => {
          console.log(data);
          setTimeout(() => {
            this.$router.push({ name: 'my-coupons' })
          }, 2000);
        })
        .catch(({response}) => {
          console.error(response.data);
        });

      }

    }

  }

}

</script>

<style>

</style>