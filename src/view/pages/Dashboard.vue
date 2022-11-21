<template>

  <!-- DASHBOARD -->
  <main>

    <section class="row">

      <!-- OFFERS -->
      <article class="col-sm-12 justify-content-start">

        <!-- TITLE -->
        <h3>Ofertas</h3>

        <!-- CAROUSEL -->
        <carousel-3d 
          autoplay
          :autoplayTimeout="5000" 
          :autoplayHoverPause="true"
          :perspective="0"
          :display="11"
          :width="450"
          :height="300"
          class="cursor-pointer"
        >
          <slide v-for="(data, index) in offerImages" :key="index" :index="index">
            <template>
                <img width="450" height="300" :src="data.image">
            </template>
          </slide>
        </carousel-3d>

      </article>

      <!-- CATEGORIES -->
      <article class="col-sm-12">

        <!-- TITLE -->
        <h3>Categorías</h3>

        <!-- CATEGORIES -->
        <ListWidget1/>

      </article>

      <!-- PRODUCTS -->
      <section class="col-sm-12">

        <div class="row">

          <!-- CONTENT -->
          <article class="col-sm-12 col-md-3 mb-5" v-for="data in 8" :key="data">

            <!-- CARDS -->
            <div class="card">

              <!-- CARD IMAGE -->
              <div class="card bg-dark text-white text-right">

                <!-- IMAGE -->
                <img
                  width="600"
                  height="150"
                  src="assets/product1.jpg" 
                  class="card-img-top" 
                  alt="..."
                >

                <!-- PRICE -->
                <div class="card-img-overlay">
                  <b class="bg-primary rounded card-title p-3">
                    RD$500
                  </b>
                </div>

              </div>
              
              <!-- CARD BODY -->
              <div class="card-body">

                <!-- TITLE -->
                <div class="">

                  <!-- PRODUCT NAME -->
                  <h5 class="card-title m-0">
                    Card title
                  </h5>

                  <!--  -->
                  <p class="mt-3">
                    Tiempo Estimado: <span class="text-primary">5m</span>
                  </p>
                </div>

                <!-- DESCRIPTION -->
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <!-- ADD CART BUTTON -->
                <button class="col-sm-12 btn btn-primary">
                  <i class="fas fa-cart-arrow-down"></i> Agregar al Carrito
                </button>

              </div>

            </div>

          </article>

        </div>

      </section>

    </section>

  </main>

</template>

<script>

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import ListWidget1 from "@/view/content/widgets/list/Widget1.vue";
import offerImages from "@/core/data/offerImages.js";

export default {

  name: "dashboard",

  components: {
    ListWidget1,
  },

  data(){

    return{

      offerImages,

    }

  },

  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },

  methods: {}

};

</script>