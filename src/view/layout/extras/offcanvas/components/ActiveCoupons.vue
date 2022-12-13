<template>
  
  <main v-if="activeCoupons.length != 0">

    <!-- HEADING -->
    <h5 class="mb-5">Cupones Activos</h5>

    <section v-for="(item, index) in activeCoupons" :key="index">

        <!-- ITEM -->
        <article
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
          
        </article>

    </section>

    <router-link :to="{ name: 'my-coupons' }" class="btn btn-primary col-sm-12">
        <i class="fas fa-eye"></i> Ver Más
    </router-link>

  </main>

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {

    computed: {
        ...mapState("couponStore", [
        "activeCoupons"
        ])
    },

    methods: {
        ...mapActions("couponStore", ["getActiveCoupons"])
    },

    async created(){
        await this.getActiveCoupons();
    }

}

</script>

<style>

</style>