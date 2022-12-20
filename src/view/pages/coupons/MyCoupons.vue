<template>

  <main>
    
    <h1 class="mb-10">Mis Cupones</h1>

    <section v-if="inactiveCoupons.length != 0">

      <div class="card container">

        <section v-for="(item, index) in inactiveCoupons" :key="index">

          <!-- ITEM -->
          <div
            class="d-flex align-items-center rounded p-5 my-5"
            v-bind:class="`bg-light-${item.color}`"
          >

            <!-- ICON -->
            <span
              class="svg-icon mr-5"
              v-bind:class="`svg-icon-${item.color}`"
            >
              <!-- <span class="svg-icon svg-icon-lg">
                <inline-svg :src="item.svg" />
              </span> -->
              <img 
                class="img-fluid" 
                width="40px" 
                height="40px" 
                src="assets/Coupon.png" 
                alt=""
              >
            </span>

            <!-- TITLE -->
            <div class="d-flex flex-column flex-grow-1 mr-2">
              <a
                href="#"
                class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                {{ item.description }}
              </a>
              <span class="text-muted font-size-sm">
                Cupon valido por {{ item.number_of_days }} días
              </span>
            </div>

            <!-- ALT -->
            <span
              class="font-weight-bolder py-1 font-size-lg mr-10"
              v-bind:class="`text-${item.color}`"
            >
              -{{ item.percent }}%
            </span>

            <b-button @click="applyCoupon(item)" class="p-5" variant="primary">
              <i class="fas fa-check"></i> Aplicar
            </b-button>
            
          </div>

        </section>

      </div>

    </section>

    <section class="m-0 row justify-content-center" v-else>
      <img class="img-fluid" src="@/view/pages/coupons/assets/images/not_found_image.png" alt="Not Found Image">
    </section>

  </main>
  
</template>

<script>

import { mapActions, mapState } from 'vuex';
import restaurantApi from '@/core/services/api/restaurantApi.js';

export default {

  computed: {
    ...mapState("couponStore", [
      "inactiveCoupons"
    ])
  },

  methods: {
    
    ...mapActions("couponStore", ["getInactiveCoupons"]),

    async applyCoupon(item){

      await restaurantApi.put(`coupons/${item.id}`, {status: true})
      .then(({data}) => {
        console.log(data.data);
      })
      .catch(({response}) => {
        console.error((response.data));
      })

      this.$router.push({ name: 'dashboard' });

    },

  },

  async created(){
    await this.getInactiveCoupons();
  }

}

</script>

<style>

</style>